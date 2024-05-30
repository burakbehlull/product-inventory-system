import { BrowserRouter } from 'react-router-dom'
import './main.scss'
import Routes from './routes/routes'
import {Provider} from 'react-redux'
import {store} from './store/store'
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes />
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App
