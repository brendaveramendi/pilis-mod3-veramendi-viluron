import React from 'react'

function Formulario() {
  return (
    <div>
        <h1>Formulario</h1>
        <form>
        <label htmlFor="latitud">Latitud</label>
        <input type="text" name='latitud' />
        <label htmlFor="longitud">Longitud</label>
        <input type="text" name='longitud' />
        <label htmlFor="latitud">Ciudad</label>
        <input type="text" name='ciudad' />
        <input type="submit" value="Cargar" />
        </form>
    </div>
  )
}

export default Formulario