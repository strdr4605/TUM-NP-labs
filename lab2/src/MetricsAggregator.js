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
     * @function getKeyAndDevicesPaths
     * @return {Promise<Object>} An Object with 2 keys. {key: 'session key from response headers', paths: 'response body'}
     */
    getKeyAndDevicesPaths() {

    }
}

export default MetricsAggregator