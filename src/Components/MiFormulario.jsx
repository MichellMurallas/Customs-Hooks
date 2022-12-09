import React,{useState} from 'react'
import "./MiFormulario.css"

const MiFormulario = () => {
  const [formulario, setFormulario] = useState({});
  const enviado = (e) =>{
    e.preventDefault();

    let curso = {
      titulo: e.target.titulo.value,
      anio:  e.target.anio.value,
      descripcion: e.target.descripcion.value,
      autor: e.target.autor.value,
      email: e.target.email.value
    }
    setFormulario(curso)

    console.log(e.target)
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
