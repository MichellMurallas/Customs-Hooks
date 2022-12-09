import React from 'react'
import { useMayus } from './useMayus';

const PruebasCuntoms = () => {
  const {mayusculas, minusculas, concatenar} = useMayus("Miguel Quintero")
  console.log(mayusculas("hola")) 
  return (
    <div>
      <h1>Prebas cuntoms</h1>
    </div>
  )
}

export default PruebasCuntoms;
