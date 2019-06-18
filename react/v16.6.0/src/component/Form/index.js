import React, { lazy } from 'react';
// import  {Button} from '../Button/index';
const Button = lazy(() => import('../Button/index').then(Button  => {
  console.log(2222, Button.Button);
  return Button.Button;
}));

export const Form = ({type}) => {

  console.log(444, Button);
  return (
    <Button/>
  )
}
