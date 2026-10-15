import { Outlet } from "react-router-dom"
import Header from "./Header"
import NavBar from "./NavBar"
import Footer from "./Footer"

function Layout() {
  return (
    <>
      <Header />
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout