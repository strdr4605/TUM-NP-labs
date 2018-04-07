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
<a name="new_DataParser_new"></a>

### new DataParser(contentType, data)

| Param | Type | Description |
| --- | --- | --- |
| contentType | <code>string</code> | type of the data format. |
| data | <code>Array.&lt;string&gt;</code> | array of string with data to parse. |