import React from 'react';
export default function Factory() {
  const ulFactory = React.createFactory('ul');
  const u1 = ulFactory({key: 'u1', text: '1', children: '33344'});
  const u2 = ulFactory({key: 'u2', text: '2'});
  return React.createElement('div', { key: 'fac', className: 'name' }, [u1, u2]);
}
