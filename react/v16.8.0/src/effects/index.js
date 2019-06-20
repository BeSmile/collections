import React, { useEffect, useState } from 'react';


export default function EffectComponent() {
  const [ count, setCount ] = useState(0);
  const [ num, setNum ] = useState(0);
  useEffect(() => {
    console.log('effct mount3');
    return () => {
      console.log('effect umount');
    }
  }, [count, num])
  return (
    <div>effects -{count}</div>
  )
}
