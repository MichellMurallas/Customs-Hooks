import React,{useState} from 'react'
import "./MiFormulario.css"

const MiFormulario = () => {
  const [formulario, setFormulario] = useState({});
  const serializarFormulario = (formulario) =>{
    const formData = new FormData(formulario);
    const objetoCopleto = {};

    for(let [name, value] of formData){
      objetoCopleto[name] = value;
    }
    return objetoCopleto;
  }
  const enviado = (e) =>{
    e.preventDefault();

    // let curso = {
    //   titulo: e.target.titulo.value,
    //   anio:  e.target.anio.value,
    //   descripcion: e.target.descripcion.value,
    //   autor: e.target.autor.value,
    //   email: e.target.email.value
    // }
    let curso = serializarFormulario(e.target)
    setFormulario(curso)
    // serializarFormulario(e.target)
    console.log(curso)
  }
  return (
    <div>
      <h1>Formulario</h1>
      <p>Formulario para guardar curso</p>
      <p>Curso guardado: </p>
      <pre>{JSON.stringify(formulario)}</pre>

      <form onSubmit={enviado} className="mi-formulario">
        <input type="text" name="titulo" placeholder="Titulo" />
        <input type="number" name="anio" placeholder="Año de publicacion:" />
        <textarea name="descripcion" placeholder="Descripcion"/>
        <input type="text" name="autor" placeholder="Autor" />
        <input type="email" name="email" placeholder="Correo de contacto:" />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MiFormulario;
