import DataParser from './../../src/DataParser'

let parser = new DataParser()
let parse = parser.parse('application/json', `{
    "device_id": "123",
    "sensor_type": 0,
    "value": 100
}`)
let parseJSON = parser.parseJSON(`{
    "device_id": "123",
    "sensor_type": 0,
    "value": 100
}`)
let parseXML = parser.parseXML(`<?xml version="1.0" ?>
<device id="321">
    <type>1</type>
    <value>0.5</value>
</device>`)
let parseCSV = parser.parseCSV(`device_id;sensor_type;value
132;3;0
132;4;50`)

test('DataParser functions return an Array', () => {
    expect(Array.isArray(parse)).toBe(true)

    expect(Array.isArray(parseJSON)).toBe(true)

    expect(Array.isArray(parseXML)).toBe(true)

    expect(Array.isArray(parseCSV)).toBe(true)
})

test('DataParser functions return an Array of Objects', () => {
    expect(parse.every(el => typeof el == 'object')).toBe(true)
    expect(parseJSON.every(el => typeof el == 'object')).toBe(true)
    expect(parseXML.every(el => typeof el == 'object')).toBe(true)
    expect(parseCSV.every(el => typeof el == 'object')).toBe(true)
})