import React from 'react'

import Header from './components/Header/Header'
import Brand from './components/Brand/Brand'
import MensClothing from './components/MensClothing/MensClothing'
import Navbar from './components/Navbar/Navbar'

const App = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Brand />
            <MensClothing />
        </>
    )
}

export default App
