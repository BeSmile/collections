import React, { useContext } from 'react';

const ButtonContext = React.createContext('red');

const Button = function() {
  const color = useContext(ButtonContext);
  console.log('color', color);
  return (
    <button>button </button>
  )
}

export default function ContextComponent (){
  return (
    <div>
      <ButtonContext.Provider>
        <Button/>2
      </ButtonContext.Provider>
    </div>
  )
}
