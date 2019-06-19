import React, { lazy, Suspense } from 'react';
// import  {Button} from '../Button/index';
let Button;

const Button1 = lazy(async () => {
  const Bt = await import('../Button');
  console.log(Bt, 3333);
  return Bt;
});

export const Form = ({type}) => {
  console.log(Button);
  const aaa = Promise.all([
    Button = lazy(() => import('../Button').then(Button => Button))
  ]).then((a) => {
    console.log('promise',a['status']);
  });
  console.log(aaa, 'aaa');
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Button/>
      <Button1/>
      </Suspense>
    </div>
  )
}
