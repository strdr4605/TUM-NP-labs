import config from './../../src/config'
import MetricsAggregator from './../../src/MetricsAggregator'

let metricsAggregator = new MetricsAggregator(config.apiUrl)

test('getKeyAndDevicesPaths Promise return object', () => {
    expect.assertions(1);
    return metricsAggregator.getKeyAndDevicesPaths().then(data => {
        expect(typeof data).toBe('object');
    });
});

test('getKeyAndDevicesPaths Promise return object has property key and paths', () => {
    expect.assertions(2);
    return metricsAggregator.getKeyAndDevicesPaths().then(data => {
        expect(data).toHaveProperty('key');
        expect(data).toHaveProperty('paths');
    });
});

test('getKeyAndDevicesPaths Promise return object key type is string, value 42', () => {
    expect.assertions(2);
    return metricsAggregator.getKeyAndDevicesPaths().then(data => {
        expect(typeof data.key).toBe('string');
        expect(data.key.length).toBe(42);
    });
});

test('getDeviceData Promise return object', () => {
    expect.assertions(1);
    return metricsAggregator.getDeviceData('', '').then(data => {
        expect(typeof data).toBe('object');
    });
});

test('getDeviceData Promise return object has property contentType and data', () => {
    expect.assertions(2);
    return metricsAggregator.getDeviceData('', '').then(data => {
        expect(data).toHaveProperty('contentType');
        expect(data).toHaveProperty('data');
    });
});