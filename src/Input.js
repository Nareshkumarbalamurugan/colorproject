import React from 'react';

const Input = ({ setColor, setToggle,toggle }) => {
  return (
    <form>
      <input
        type="text"
        onChange={(e) => setColor(e.target.value)}
        style={{ width: '200px', border: 'solid 1px black', marginBottom: '10px' }}
        placeholder="Enter color"
      />
      <br />
      <button type="button" onClick={() => setToggle(!toggle)}>
        Toggle Text Color
      </button>
    </form>
  );
};

export default Input;
