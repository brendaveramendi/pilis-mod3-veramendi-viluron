import React from 'react';
import { useForm } from 'react-hook-form';
import { getWeather, postWeather   } from '../../services';
import { useContext } from 'react';
import { CardContext } from '../../context/CardContext';
import './Formulario.css'
const Formulario = ()=> {
  const {register, handleSubmit, formState:{errors}, reset} = useForm();
  const {cardsColection, setCardsColection} = useContext(CardContext);

  const customSubmit = (data) =>{
    reset();
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
    <div className='form-container'>
       
        <form className='form'  onSubmit={ handleSubmit(customSubmit)}>
            
            <span className='title'>Ingrese Datos</span>  
           
            <input type="text"
             placeholder='Ingrese Ciudad' 
             className='input'
             {...register('ciudad',{required:true})}/>
            {errors.ciudad?.type === 'required' && <small>El campo no puede estar vacio</small>}
            <input type="text"
             placeholder='Ingrese Latitud'
             className='input'
             {...register('latitud',{required:true})}/>
            {errors.latitud?.type === 'required' && <small>El campo no puede estar vacio</small>}
            <input type="text"
             placeholder='Ingrese Longitud' 
             className='input'
             {...register('longitud',{required:true})}/>
            {errors.longitud?.type === 'required' && <small>El campo no puede estar vacio</small>}
            <input type="url"
             alt='image'
             className='input'
            placeholder='Url Image'{...register('image',{required:true})}/>
            {errors.image?.type === 'required' && <small>El campo no puede estar vacio</small>}
            
          <button className='submit' type='submit'>Cargar Tarjeta</button>

        </form>
        
    </div>
  )
}

export default Formulario;