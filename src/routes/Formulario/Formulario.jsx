import React from 'react';
import { useForm } from 'react-hook-form';
import { getWeather } from '../../services';
import { useContext } from 'react';
import { CardContext } from '../../context/CardContext';
import { postWeather } from '../../services';
const Formulario = ()=> {
  const {register, handleSubmit, formState:{errors}} = useForm();
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
   
  
  }
  return (
    <>
        <h1>Formulario</h1>
        <form onSubmit={ handleSubmit(customSubmit)}>
          <div>
            <label >Ciudad</label>
            <input type="text" {...register('ciudad',{required:true})}/>
            {errors.ciudad?.type === 'required' && <small>El campo no puede estar vacio</small>}
            <label>Latitud</label>
            <input type="text" {...register('latitud',{required:true})}/>
            {errors.latitud?.type === 'required' && <small>El campo no puede estar vacio</small>}
            <label>Longitud</label>
            <input type="text" {...register('longitud',{required:true})}/>
            {errors.longitud?.type === 'required' && <small>El campo no puede estar vacio</small>}
            <label>Image</label>
            <input type="url" alt='image' placeholder='Ingrese Url'{...register('image',{required:true})}/>
            {errors.image?.type === 'required' && <small>El campo no puede estar vacio</small>}
            
            <button type='submit'>Send</button>
          </div>

        </form>
        
    </>
  )
}

export default Formulario