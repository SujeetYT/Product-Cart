import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import Navbar from './components/ui/Navbar/Navbar.tsx'
import Cart from './components/Cart/Cart.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
