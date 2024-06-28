import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from '../store.js'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Counter from './Components/Counter.jsx'
import About from './Components/About.jsx'
import Product from './Components/Product.jsx'
import Cart from './Components/Cart.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
        <Route path='/About' element={<About/>}/>
        <Route path='/counter' element={<Counter />}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path='/Cart' element={<Cart/>}/></Route>
      </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
