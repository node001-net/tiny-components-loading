import * as riot from 'riot'

import TinyLoading from './loading.riot'
import ExampleLoading from './exampleLoading.riot'

riot.register('tiny-loading', TinyLoading)
riot.register('example-loading', ExampleLoading)

riot.mount('tiny-loading')
riot.mount('example-loading')
