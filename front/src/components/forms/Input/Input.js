import React from 'react';
import "./Input.css"

function Input(props) {

    const { children, type, onChange} = props

    return ( 
        <div className='inputContainer'>
            <input onChange={onChange} type={type} placeholder={children} className="input"></input>
            <label className='label'>{children}</label>
        </div>
        
     );
}

export default Input;