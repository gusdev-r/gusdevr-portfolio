import { Route, Routes } from 'react-router-dom'
import Layout from '../components/baseLayout/baseLayout'
import Signup from '../pages/signup/signup'
import Signin from '../pages/signin/signin'
import Home from '../pages/Home/home'

export default function RoutesMainApp() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="register" element={<Signup />} />
        <Route path="login" element={<Signin />} />
      </Route>
    </Routes>
  )
}
