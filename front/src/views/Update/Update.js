import React, { useState } from 'react';
import Boton from '../../components/forms/Boton/Boton';
import Input from '../../components/forms/Input/Input';
import GridColumn from '../../components/utils/GridColumn';
import "./Update.css"

function Update() {

    async function consultar(evento){
        evento.preventDefault()

        const res = await fetch('http://localhost:8090/tienda/' + id, {
            method:'GET',
        })

        if (res.ok){
            try{
            const data = await res.json()
            setSede(data.sede)
            setCiudad(data.ciudad)
            setdireccion(data.direccion)
            }catch(error){
                alert("tienda no registrada")
            }
        }else{
            alert("falta registrar datos")
        }
    }

    const [id, setId] = useState("");
    const [sede, setSede] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [direccion, setdireccion] = useState("")
    

    return ( 
        <section>
            <div className='container grid'>
                <GridColumn className="izq">
                    <form className='formulario' onSubmit={(evento)=>consultar(evento)}>
                        <h1 className='title'>Consulta</h1>
                        <Input onChange={(val)=>setId(val.target.value)}>codigo</Input>
                        <Boton style='fill' type='submit'>Buscar</Boton>
                    </form>
                </GridColumn>
                <GridColumn className="der izq">
                    <form className='formulario'>
                        <h1 className='title'>Tienda {id}</h1>
                        <Input onChange={(val)=>setSede(val.target.value)} value={sede}>Sede</Input>
                        <Input onChange={(val)=>setCiudad(val.target.value)} value={ciudad}>Ciudad</Input>
                        <Input onChange={(val)=>setdireccion(val.target.value)} value={direccion}>Direccion</Input>
                        <Boton style='fill' type='submit'>Actualizar</Boton>
                    </form>
                </GridColumn>
            </div>
        </section>
     );
}

export default Update;