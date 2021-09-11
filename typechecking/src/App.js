import React from 'react';
import Petshop from './Petshop';

const App = () => {

  const handleClick = () => {
    console.log('Iniciando o banho.......');
  }
  return (
    <Petshop
      dogs={2}
      customerName="Bruno Carneiro"
      onClick={handleClick}
    />
  )
}

export default App;