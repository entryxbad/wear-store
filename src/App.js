import React from 'react'

import Header from './components/Header/Header'
import Brand from './components/Brand/Brand'
import MensClothing from './components/MensClothing/MensClothing'
import Navbar from './components/Navbar/Navbar'
import WomensClothing from './components/WomensClothing/WomensClothing'
import Feedback from './components/Feedback/Feedback'

const App = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Brand />
            <MensClothing />
            <WomensClothing />
            <Feedback />
        </>
    )
}

export default App
