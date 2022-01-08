import React from 'react'

function Input(props) {
    return (
        <div>
            <label>
                {props.label}
            </label>
            <input 
                type={props.type} 
                value={props.value}
                id={props.id}
                name={props.name}
                placeholder={props.placeholder}
                label={props.label}
                required={props.required}
                onChange={props.onChange}
            /> 
        </div>
    )
}

export default Input
