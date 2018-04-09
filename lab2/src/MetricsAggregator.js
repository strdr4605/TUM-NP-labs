import request from 'request'
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
        this.getKeyAndDevicesPaths()
            .then(result => {
                return this.getArrayOfDeviceData(result)
            })
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log('Error, ' + error)
            })
    }

    getArrayOfDeviceData(object) {
        let promises = []
        for(let elem of object['devicePaths']) {
            promises.push(this.getDeviceData(object['key'], elem['path']))
        }
        return Promise.all(promises)
    }

    /**
     * Post request to the API.
     *
     * @async
     * @return {Promise<Object>} An Object with 2 keys. {key: 'session key from response headers', paths: 'response body'}
     */
    getKeyAndDevicesPaths() {
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
