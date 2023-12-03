import React from "react"
import Header from "./header"
import Sidebar from "./sidebar"
import Footer from "./footer"

const Layout = ({ children, includeSidebar = false }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      {includeSidebar && <Sidebar />}
      <Footer />
    </>
  )
}

export default Layout
