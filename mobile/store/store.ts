import {createStore} from 'redux'

import {initialStore,reducers} from './actions'

export const store = createStore(reducers, initialStore)

