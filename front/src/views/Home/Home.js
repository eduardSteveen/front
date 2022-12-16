import React from 'react';
import Boton from '../../components/forms/Boton/Boton';
import GridColumn from '../../components/utils/GridColumn';
import "./Home.css"
import imagenInicio from "./imagenInicio.png"

function Home() {
    return ( 
        <section className='Home'>
            <div className='container grid'>
                <GridColumn className="headLine">
                    <h1>admimnistracion de tiendas</h1>
                    <Boton style="wire">administrar</Boton>
                </GridColumn>
                <GridColumn className='imagenInicio'>
                    <img src={imagenInicio}></img>
                </GridColumn>
            </div>
        </section>
     );
}

export default Home;