import React from 'react';
import "./Input.css"

function Input(props) {

    const { children, type, onChange, value} = props

    return ( 
        <div className='inputContainer'>
            <input onChange={onChange} type={type} placeholder={children} className="input" value={value}></input>
            <label className='label'>{children}</label>
        </div>
        
     );
}

export default Input;