import React from 'react'
import NavBar from './NavBar'

const Container = ({ children }) => {
  return (
    <div>
        <NavBar/>
        <main className="main">
            {children}
        </main>
    </div>
  )
}

export default Container