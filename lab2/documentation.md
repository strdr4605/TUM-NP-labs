## Classes

<dl>
<dt><a href="#MetricsAggregator">MetricsAggregator</a></dt>
<dd><p>Main Class of the project.
It responds for api requests and data aggregation.</p>
</dd>
<dt><a href="#DataParser">DataParser</a></dt>
<dd><p>Class that responds for parsing different formats of data and return a javascript object.</p>
</dd>
</dl>

<a name="MetricsAggregator"></a>

## MetricsAggregator
Main Class of the project.
It responds for api requests and data aggregation.

**Kind**: global class

* [MetricsAggregator](#MetricsAggregator)
    * [new MetricsAggregator(url)](#new_MetricsAggregator_new)
    * [.getKeyAndDevicesPaths()](#MetricsAggregator+getKeyAndDevicesPaths) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.getDeviceData(key, path)](#MetricsAggregator+getDeviceData) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="new_MetricsAggregator_new"></a>

### new MetricsAggregator(url)
Create a Metrics Aggregator object


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The url of the API |

<a name="MetricsAggregator+getKeyAndDevicesPaths"></a>

### metricsAggregator.getKeyAndDevicesPaths() ⇒ <code>Promise.&lt;Object&gt;</code>
Post request to the API.

**Kind**: instance method of [<code>MetricsAggregator</code>](#MetricsAggregator)
**Returns**: <code>Promise.&lt;Object&gt;</code> - An Object with 2 keys. {key: 'session key from response headers', paths: 'response body'}
<a name="MetricsAggregator+getDeviceData"></a>

### metricsAggregator.getDeviceData(key, path) ⇒ <code>Promise.&lt;Object&gt;</code>
GET request to the device path.

**Kind**: instance method of [<code>MetricsAggregator</code>](#MetricsAggregator)
**Returns**: <code>Promise.&lt;Object&gt;</code> - An Object with 2 keys. {contentType: 'type of data format', data: 'response body'}

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The key for the currect session |
| path | <code>string</code> | The path of the specific device |

<a name="DataParser"></a>

## DataParser
Class that responds for parsing different formats of data and return a javascript object.

**Kind**: global class

* [DataParser](#DataParser)
    * [.parse(contentType, data)](#DataParser+parse) ⇒ <code>Array.&lt;Object&gt;</code>
    * [.parseJSON(data)](#DataParser+parseJSON) ⇒ <code>Array.&lt;Object&gt;</code>
    * [.parseXML(data)](#DataParser+parseXML) ⇒ <code>Array.&lt;Object&gt;</code>
    * [.parseCSV(data)](#DataParser+parseCSV) ⇒ <code>Array.&lt;Object&gt;</code>

<a name="DataParser+parse"></a>

### dataParser.parse(contentType, data) ⇒ <code>Array.&lt;Object&gt;</code>
This function receive data and parse it depending on the contentType (calls another function which parse only specific contentType).

**Kind**: instance method of [<code>DataParser</code>](#DataParser)
**Returns**: <code>Array.&lt;Object&gt;</code> - An Array of Objects with parsed data.

| Param | Type | Description |
| --- | --- | --- |
| contentType | <code>string</code> | type of the data format. |
| data | <code>string</code> | string with data to parse. |

<a name="DataParser+parseJSON"></a>

### dataParser.parseJSON(data) ⇒ <code>Array.&lt;Object&gt;</code>
This fuction receive a JSON string and parse it to an Array of Objects

**Kind**: instance method of [<code>DataParser</code>](#DataParser)
**Returns**: <code>Array.&lt;Object&gt;</code> - An Array of Objects with parsed data.

| Param | Type | Description |
| --- | --- | --- |
| data | <code>string</code> | string with data to parse in JSON format. |

<a name="DataParser+parseXML"></a>

### dataParser.parseXML(data) ⇒ <code>Array.&lt;Object&gt;</code>
This fuction receive a XML string and parse it to an Array of Objects

**Kind**: instance method of [<code>DataParser</code>](#DataParser)
**Returns**: <code>Array.&lt;Object&gt;</code> - An Array of Objects with parsed data.

| Param | Type | Description |
| --- | --- | --- |
| data | <code>string</code> | string with data to parse in XML format. |

<a name="DataParser+parseCSV"></a>

### dataParser.parseCSV(data) ⇒ <code>Array.&lt;Object&gt;</code>
This fuction receive a CSV string and parse it to an Array of Objects

**Kind**: instance method of [<code>DataParser</code>](#DataParser)
**Returns**: <code>Array.&lt;Object&gt;</code> - An Array of Objects with parsed data.

| Param | Type | Description |
| --- | --- | --- |
| data | <code>string</code> | string with data to parse in CSV format. |