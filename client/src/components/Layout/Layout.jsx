import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Layout=()=>{
  return (
    <main>
      <nav><Navbar/></nav>
      <main>
        <Outlet/>
      </main>
      {/* <nav><Navbar/></nav> */}
    </main>
  )
}

export default Layout;