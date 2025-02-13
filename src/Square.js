import React from 'react';

const Square = ({ color, toggle }) => {
  return (
    <div
      style={{
        border: 'solid black',
        textAlign: 'center',
        height: '300px',
        width: '200px',
        alignItems: 'center',
        backgroundColor: color,
        display: 'flex',
        justifyContent: 'center',
        color: toggle ? 'white' : 'black',
      }}
    >
      <p>{color}</p>
    </div>
  );
};

export default Square;
