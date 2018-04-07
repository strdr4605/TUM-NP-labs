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

## Functions

<dl>
<dt><a href="#getKeyAndDevicesPaths">getKeyAndDevicesPaths()</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Post request to the API.</p>
</dd>
</dl>

<a name="MetricsAggregator"></a>

## MetricsAggregator
Main Class of the project.
It responds for api requests and data aggregation.

**Kind**: global class
<a name="new_MetricsAggregator_new"></a>

### new MetricsAggregator(url)
Create a Metrics Aggregator object


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The url of the API |

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

<a name="getKeyAndDevicesPaths"></a>

## getKeyAndDevicesPaths() ⇒ <code>Promise.&lt;Object&gt;</code>
Post request to the API.

**Kind**: global function
**Returns**: <code>Promise.&lt;Object&gt;</code> - An Object with 2 keys. {key: 'session key from response headers', paths: 'response body'}