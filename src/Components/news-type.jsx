import React from 'react';

const NewsType = ({ type }) => {
    return (
        <>
            <div style={{ textAlign: 'center', color: 'red' }}>
                <h1> {type.toUpperCase()} </h1>
            </div>
        </>
    )

}

export default NewsType;