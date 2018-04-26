import 'babel-polyfill'
import config from './config'
import MetricsAggregator from './MetricsAggregator'

console.log('scripts start')
let metricsAggregator = new MetricsAggregator(config.apiUrl)
metricsAggregator.showAgregatedData()
