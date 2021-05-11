import React from 'react';
import './button.css';

const CustomButton = ({ label, ...otherProps }) => {
    return (
        <>
            <button {...otherProps} className="button">
                <h6>
                    {label}
                </h6>
            </button>
        </>
    )
}

export default CustomButton;