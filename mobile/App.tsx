import Routes from './routes/router'

import {Provider} from 'react-redux'
import {store} from './store/store'

export default function App() {
  return(
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}