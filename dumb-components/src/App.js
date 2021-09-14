import React, { useState } from 'react';
import Button from './components/Button';
import Calc from './components/Calc';

const App = () => {

  const [value, setValue] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(30);

  const handleClick = () => {
    setMin(10);
  }

  const handleCalc = e => {
    const value = Number(e.target.value);
    setValue(min + max + value);
  }

  return (
    <>
      <Button onClick={handleClick}>Adicionar no carrinho</Button>
      
      <h1>Valor calculado: {value}</h1>
      <Calc min={min} max={max} onChange={handleCalc} />
    </>
  )
}


export default App;
