import React from 'react';
import GridColumn from '../../components/utils/GridColumn';
import "./Home.css"
import imagenInicio from "./imagenInicio.png"

function Home() {
    return ( 
        <section className='Home'>
            <div className='container grid'>
                <GridColumn className="headLine">
                    <h1>admimnistracion de tiendas</h1>
                </GridColumn>
                <GridColumn className='imagenInicio'>
                    <img src={imagenInicio}></img>
                </GridColumn>
            </div>
        </section>
     );
}

export default Home;