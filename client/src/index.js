import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyled from './styles/globalstyle'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RoutesMainApp from './routes/routes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RoutesMainApp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
