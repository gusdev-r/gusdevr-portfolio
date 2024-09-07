import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RoutesMainApp from './routes/routes'
import GlobalStyled from './styles/globalstyle'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyled />
      <Routes>
        <Route path="/*" element={<RoutesMainApp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
