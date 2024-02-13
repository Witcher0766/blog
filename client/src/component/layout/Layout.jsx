import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
import Box from '../box/Box'

const Layout = () => {
  return (
    <>
        <main>
            <Header/>
            <Box/>
            <Outlet/>
        </main>
    </>
  )
}

export default Layout