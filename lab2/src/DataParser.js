/**
 * Class that responds for parsing different formats of data and return a javascript object. 
 */
class DataParser {

    constructor() {

    }

    /**
     * This function receive data and parse it depending on the contentType (calls another function which parse only specific contentType).
     * 
     * @param {string} contentType - type of the data format.
     * @param {string} data - string with data to parse.
     * @return {Array<Object>} An Array of Objects with parsed data.
     */
    parse(contentType, data) {
        
    }

    /**
     * This fuction receive a JSON string and parse it to an Array of Objects
     * 
     * @param {string} data - string with data to parse in JSON format.
     * @return {Array<Object>} An Array of Objects with parsed data.
     */
    parseJSON(data) {
        
    }

    /**
     * This fuction receive a XML string and parse it to an Array of Objects
     * 
     * @param {string} data - string with data to parse in XML format.
     * @return {Array<Object>} An Array of Objects with parsed data.
     */
    parseXML(data) {
        
    }

    /**
     * This fuction receive a CSV string and parse it to an Array of Objects
     * 
     * @param {string} data - string with data to parse in CSV format.
     * @return {Array<Object>} An Array of Objects with parsed data.
     */
    parseCSV(data) {
        
    }
}

export default DataParser