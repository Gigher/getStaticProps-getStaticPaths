import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen'>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default Layout;