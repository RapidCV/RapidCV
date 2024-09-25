import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"


function Layout({children}:{children : React.ReactNode}) {
  return (
    <>
    <Navbar/>
    <main>{children}</main>
    <Footer/>
    </>
  )
}

export default Layout