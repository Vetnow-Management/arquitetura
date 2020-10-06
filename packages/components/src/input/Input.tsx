import React, { ReactElement } from 'react';

export type InputProp = {
  id: string;
  type?: string;
}

export default function Input(props: InputProp): ReactElement {
  const {
    id,
    type
  } = props;

  return (
    <input id={id} type={type}/>
  )
}
