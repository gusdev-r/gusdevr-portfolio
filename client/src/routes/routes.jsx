import { Route, Routes } from "react-router-dom";
import Layout from "../components/baseLayout/baseLayout";
import Singin from "../pages/signin/signin";
import Singup from "../pages/signup/signup";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/register" element={<Singup />} />
        <Route path="/login" element={<Singin />} />
      </Route>
    </Routes>
  );
}
