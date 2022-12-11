import { useEffect, useState } from 'react'

export const useAjax = (url)=>{

  const [estado, setEstado] = useState({
    datos:null,
    cargando: true
  })

  const getData = async()=>{

    setEstado({
      ...estado,
      cargando: true
    })

      const peticion = await fetch(url);
      const {data} = await peticion.json();
      setEstado({
        datos:data,
        cargando: false
      })
  }

  useEffect(()=>{
    getData()
    console.log(url)
  },[url]);

  return{
    datos: estado.datos,
    cargando: estado.cargando
  }
}

