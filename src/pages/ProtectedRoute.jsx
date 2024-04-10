import { useCookies } from "react-cookie";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const [cookie] = useCookies(["token"]);

  return cookie.token ? <Outlet /> : <Navigate to="/login"/>
};

export default ProtectedRoute;
