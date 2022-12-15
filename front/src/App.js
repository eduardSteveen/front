import React from 'react';
import {Route, Routes} from "react-router-dom";
//menu
import Nav from './components/Menu/Nav';
import  "./assets/global.css"
//para hacer las rutas
import Home from './views/Home/Home';


function App() {
    return ( 
        <div>
            <Nav></Nav>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
            </Routes>
        </div>
     );
}

export default App;