import request from 'request'
import cliProgress from 'cli-progress'
import DataParser from './DataParser'
/**
 * Main Class of the project.
 * It responds for api requests and data aggregation.
 */
class MetricsAggregator {

    /**
     * Create a Metrics Aggregator object
     * @param {string} url - The url of the API
     */
    constructor(url) {
        this.url = url
        this.progressBar = new cliProgress.Bar({}, cliProgress.Presets.rect)
        this.completedRequests = 0
        this.aggregatedData = []
    }

    /**
     * Get devices data, parse and return it for next operations
     * 
     * @async
     * @return {Array<Array<Object>>} Array of agregated data objects separated in a arrays
     */
    async getAgregatedData() {
        let rawDeviceDataArray = await this.getKeyAndDevicesPaths()
            .then(result => {
                return this.getRawDeviceDataArray(result)
            })
            .catch((error) => {
                console.log('\nError, ' + error)
            })

        let parcedDeviceDataArray = this.getParcedDeviceDataArray(rawDeviceDataArray)

        let tempAgregatedData = []
        for(let deviceData of parcedDeviceDataArray) {
            if(tempAgregatedData[deviceData['type']] === undefined) {
                tempAgregatedData[deviceData['type']] = []
            }
            tempAgregatedData[deviceData['type']].push({
                id: deviceData['id'],
                value: deviceData['value']
            })
        }

        return tempAgregatedData;
    }

    /**
     * Show agregated data sorted by types
     * 
     * @async
     */
    async showAgregatedData() {
        this.aggregatedData = await this.getAgregatedData()
        console.log('')
        for(let [index, deviceArray] of this.aggregatedData.entries()) {
            let deviceName = index == 0 ? 'Temperature'     :
                             index == 1 ? 'Humidity'        :
                             index == 2 ? 'Motion'          :
                             index == 3 ? 'Alien Presence'  :
                             index == 4 ? 'Dark Matter'     : 'Unknown'
            console.log(`${deviceName}:`)
            if(deviceArray !== undefined) {
                for(let device of deviceArray) {
                    console.log(`Device ${device['id']} - ${device['value']}`)
                }
            }
            console.log('')
        }
    }

    /**
     * GET request to the API device paths
     * 
     * @async
     * @param {Object} object - Object with session's key and devicePaths
     * @return {Array<Promise<Object>>} An Array of Objects with device data and content type
     */
    getRawDeviceDataArray(object) {
        let promises = []
        for(let elem of object['devicePaths']) {
            promises.push(this.getDeviceData(object['key'], elem['path']))
        }
        this.totalRequests = promises.length
        return Promise.all(promises)
    }

    /**
     * Take the devices data and convert it to an Object using DataParser Class methods according to data's content type
     * 
     * @param {Array<Object>} rawDeviceDataArray 
     */
    getParcedDeviceDataArray(rawDeviceDataArray) {
        let parsedDeviceDataArray = []
        let dataParser = new DataParser()
        for(let rawDeviceData of rawDeviceDataArray) {
            if(rawDeviceData['contentType'] == 'text/plain; charset=utf-8') {
                console.log(rawDeviceData['data'])
            } else {
                parsedDeviceDataArray.push(...dataParser.parse(rawDeviceData['contentType'], rawDeviceData['data']))
            }
        }
        return parsedDeviceDataArray
    }

    /**
     * POST request to the API.
     *
     * @async
     * @return {Promise<Object>} An Object with 2 keys. {key: 'session key from response headers', paths: 'response body'}
     */
    getKeyAndDevicesPaths() {
        console.log('Requests in progress...')
        this.progressBar.start(100, 0);
        return new Promise((resolve, reject) => {
            request.post(this.url, (err, res, body) => {
                if(err) {
                    reject('POST failed, ' + err)
                } else {
                    try {
                        resolve({
                            key: res.headers.session,
                            devicePaths: JSON.parse(body)
                        })
                    } catch(error) {
                        reject(error)
                    }
                }
            })
        })
    }

    /**
     * GET request to the device path.
     *
     * @async
     * @param {string} key - The key for the currect session
     * @param {string} path - The path of the specific device
     * @return {Promise<Object>} An Object with 2 keys. {contentType: 'type of data format', data: 'response body'}
     */
    getDeviceData(key, path) {
        return new Promise((resolve, reject) => {
            let options = {
                url: this.url + path.slice(1),
                headers: {session: key}
            }
            request.get(options, (err, res, body) => {
                if(err) {
                    reject('GET failed, ' + err)
                } else {
                    ++this.completedRequests
                    this.progressBar.update((this.completedRequests / this.totalRequests * 100).toFixed(2))
                    if(this.completedRequests == this.totalRequests)
                        this.progressBar.stop();
                    resolve({
                        contentType: res.headers['content-type'],
                        data: body
                    })

                }
            })
        })
    }
}

export default MetricsAggregator
