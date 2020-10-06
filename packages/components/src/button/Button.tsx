import React, { ReactElement, ReactNode } from 'react';
import { Verify } from '@vetnow-management/essentials';

export type ButtonProp = {
  color: 'green' | 'red',
}

export default function Button({ color }: ButtonProp): ReactElement {
  console.log('Verify: ', Verify.isFalse(true));

  return (
    <button
       type='button'
       style={{ color }}
       onClick={() => console.log('CLICKED')}
    />
  )
}
