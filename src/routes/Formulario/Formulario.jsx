import React from 'react';
import { useForm } from 'react-hook-form';
import { getWeather } from '../../services';
import { useContext } from 'react';
import { CardContext } from '../../context/CardContext';
import { postWeather } from '../../services';
import './Formulario.css';

const Formulario = ()=> {
  const {register, handleSubmit,reset, formState:{errors}} = useForm();
  const {cardsColection, setCardsColection} = useContext(CardContext);

  const customSubmit = (data) =>{
    const {ciudad, latitud, longitud, image} = data;
    getWeather(latitud, longitud)
   .then(weather=>{
    const {latitude, longitude, current_weather} = weather;
    const{temperature,windspeed} = current_weather;
    const newCard = {latitude, longitude, city:ciudad, image, temperature, windspeed, id: cardsColection.length+1}
      setCardsColection([...cardsColection, newCard])
      postWeather(newCard);
   })
   .catch(error=>console.log(error))
   
  reset();
  }
  return (
    <>
        <h1>Formulario</h1><br />
        <form className='formulario-form' onSubmit={ handleSubmit(customSubmit)}>
          <div className='new-formulario'>
            
            <input className='formulario-input' type="text" {...register('ciudad',{required:true})}/>
            <label >Ciudad</label>
            {errors.ciudad?.type === 'required' && <small>El campo no puede estar vacio</small>}
            
            <input className='formulario-input' type="text" {...register('latitud',{required:true})}/>
            <label>Latitud</label>
            {errors.latitud?.type === 'required' && <small>El campo no puede estar vacio</small>}
            
            <input className='formulario-input' type="text" {...register('longitud',{required:true})}/>
            <label>Longitud</label>
            {errors.longitud?.type === 'required' && <small>El campo no puede estar vacio</small>}
            
            <input className='formulario-input' type="url" alt='image' placeholder='Ingrese Url'{...register('image',{required:true})}/>
            <label>Image</label>
            {errors.image?.type === 'required' && <small>El campo no puede estar vacio</small>}
            
            <br /><button className='btn' type='submit'> Cargar Tarjeta</button>
          </div>

        </form>
        
    </>
  )
}

export default Formulario