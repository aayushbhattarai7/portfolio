import Navbar from "../organism/Header";
import { Outlet } from "react-router-dom";
export function Route() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
    
}
