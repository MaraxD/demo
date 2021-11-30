import Navbar from './Navbar/Navbar';
import Tech from './Tech/Tech';
import Promovare from './Promovare/Promovare';
import Reprezentare from './Reprezentare/Reprezentare';
import HR from './HR/HR';
import Footer from './Footer/Footer';
import {Routes,Route} from 'react-router-dom';

import React from 'react'

function Main() {
    return (
        <div className="main">
            <Navbar/>
            <Routes>
                <Route path="/tech" component={Tech}/>
                <Route path="/promovare" component={Promovare}/>
                <Route path="/reprezentare" component={Reprezentare}/>
                <Route path="/HR" component={HR}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default Main

