import React from 'react'
import Nav from '../Nav'
import { Footer } from '../Footer/Footer'
import '../Nav.css'

function Layout({children}) {
  return (
    <div>
        <Nav />
        <div className="content">
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout