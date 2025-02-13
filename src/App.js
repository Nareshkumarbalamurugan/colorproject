import React, { useState } from 'react';
import Square from './Square'; // Capitalized component name
import Input from './Input';

const App = () => {
  const [color, setColor] = useState('white');
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <Square color={color} toggle={toggle} />
      <Input setColor={setColor} setToggle={setToggle} toggle={toggle} />
    </div>
  );
};

export default App;
