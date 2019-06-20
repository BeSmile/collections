import React, { useState } from 'react';

export default function StateComponent(props) {
  const [ name, setName1 ] = useState("");

  console.log(name);

  setTimeout(function() {
    setName1("4444")
  }, 1000);
  console.log('render', props);
  return <div>
      2222 - {name}
  </div>
}
