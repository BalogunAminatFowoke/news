import React from 'react';
import './input-form.css';

const InputForm = ({ type, required, label, ...otherProps }) => {
    return (
        <>

            <div>
                <h4 style={{ color: 'red' }}> {label} </h4>
                <input {...otherProps} required className="input"></input>


            </div>

        </>
    )
}

export default InputForm;