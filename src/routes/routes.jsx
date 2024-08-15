import { Route, Routes } from "react-router-dom";
import Singup from "../pages/signup/signup";
import Singin from "../pages/signin/signin";
import Layout from "../components/baseLayout/baseLayout";

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
