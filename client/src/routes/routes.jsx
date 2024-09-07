import { Route, Routes } from 'react-router-dom'
import Layout from '../components/baseLayout/baseLayout'
import Singin from '../pages/signin/signin'
import Singup from '../pages/signup/signup'
import Home from '../pages/Home/home'

export default function RoutesMainApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/register" element={<Singup />} />
        <Route path="/login" element={<Singin />} />
      </Route>
    </Routes>
  )
}
