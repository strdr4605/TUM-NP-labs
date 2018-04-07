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
    }

    /**
     * Post request to the API.
     *
     * @async
     * @return {Promise<Object>} An Object with 2 keys. {key: 'session key from response headers', paths: 'response body'}
     */
    getKeyAndDevicesPaths() {

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

    }
}

export default MetricsAggregator