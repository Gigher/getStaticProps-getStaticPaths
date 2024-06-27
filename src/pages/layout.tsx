import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

interface LayoutProps  {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='min-h-screen'>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default Layout;