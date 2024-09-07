import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RoutesMainApp from './routes/routes'
import GlobalStyled from './styles/globalstyle'
import { ToastConfig } from './components/toast/toast'
import 'react-toastify/dist/ReactToastify.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyled />
      <Routes>
        <Route path="/*" element={<RoutesMainApp />} />
      </Routes>
      <ToastConfig />
    </BrowserRouter>
  </React.StrictMode>,
)
