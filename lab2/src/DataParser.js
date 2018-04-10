import xmlParser from 'xml2js'
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
        let parser = contentType === 'Application/json' ? this.parseJSON :
                     contentType === 'Application/xml' ? this.parseXML :
                     contentType === 'text/csv' ? this.parseCSV : undefined
        return parser !== undefined ? parser(data) : []
    }

    /**
     * This fuction receive a JSON string and parse it to an Array of Objects
     *
     * @param {string} data - string with data to parse in JSON format.
     * @return {Array<Object>} An Array of Objects with parsed data.
     */
    parseJSON(data) {
        let parsedData = []
        let jsonData = JSON.parse(data)
        if(Array.isArray(jsonData)) {
            for(let elem of jsonData) {
                parsedData.push({
                    id: elem['device_id'],
                    type: elem['sensor_type'],
                    value: elem['value']
                })
            }
        } else {
            parsedData.push({
                id: jsonData['device_id'],
                type: jsonData['sensor_type'],
                value: jsonData['value']
            })
        }
        return parsedData
    }

    /**
     * This fuction receive a XML string and parse it to an Array of Objects
     *
     * @param {string} data - string with data to parse in XML format.
     * @return {Array<Object>} An Array of Objects with parsed data.
     */
    parseXML(data) {
        let parsedData = []
        xmlParser.parseString(data, (err, result) => {
            let jsonData = result['device']
            if(Array.isArray(jsonData)) {
                for(let elem of jsonData) {
                    parsedData.push({
                        id: elem['$']['id'],
                        type: parse(elem['type'][0]),
                        value: parseFloat(elem['value'][0])
                    })
                }
            } else {
                parsedData.push({
                    id: jsonData['$']['id'],
                    type: parseInt(jsonData['type'][0]),
                    value: parseFloat(jsonData['value'][0])
                })
            }
        })
        return parsedData
    }

    /**
     * This fuction receive a CSV string and parse it to an Array of Objects
     *
     * @param {string} data - string with data to parse in CSV format.
     * @return {Array<Object>} An Array of Objects with parsed data.
     */
    parseCSV(data) {
        let parsedData = []
        let rowData = data.split('\n')
        rowData.shift() //remove data descripter row
        rowData.pop() // remove last element that is an empty string
        for(let elem of rowData) {
            let sensorData = elem.split(',')
            parsedData.push({
                id: sensorData[0],
                type: parseInt(sensorData[1]),
                value: parseFloat(sensorData[2])
            })
        }
        return parsedData
    }
}

export default DataParser
