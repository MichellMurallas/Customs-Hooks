export const useMayus = (texto) =>{

  const mayusculas = (valor = "") =>{
    return texto.toUpperCase();
  }
  const minusculas = (valor = "") =>{
    return texto.toLowerCase();
  }
  const concatenar = (added) =>{
    return texto+added;
  }

  return{
    mayusculas,
    minusculas,
    concatenar
  }
}