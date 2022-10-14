import React from 'react';
import { useForm } from 'react-hook-form';
import { getWeather, postWeather   } from '../../services';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CardContext } from '../../context/CardContext';
import './Formulario.css'
const Formulario = ()=> {
  const {register, handleSubmit, formState:{errors}} = useForm();
  const {cardsColection, setCardsColection} = useContext(CardContext);
  const navigate = useNavigate()

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
   
   navigate('/')
  }
  return (
    <div className='form-card-container'>
       
        <form className='form-card'  onSubmit={ handleSubmit(customSubmit)}>
            
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