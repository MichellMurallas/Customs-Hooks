
import { useMayus } from './useMayus';

const PruebasCuntoms = () => {

  const {estado, mayusculas, minusculas, concatenar} = useMayus("Michll Murallas")

  return (
    <div>
      <h1>Pruebas cuntoms</h1>
      {estado}

      <button onClick={mayusculas} > Poner en mayusculas</button>
      <button onClick={minusculas} > Poner en mayusculas</button>
      <button onClick={ e => concatenar (" probando hooks")} > Poner en mayusculas</button>
    </div>
  )
}

export default PruebasCuntoms;
