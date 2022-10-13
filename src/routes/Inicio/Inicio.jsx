import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './Inicio.css'


function Inicio() {
  const { setCurrentUser } = useContext(UserContext)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()

  const onSubmit = (data) => {
    localStorage.setItem('currentUser', JSON.stringify(data))
    setCurrentUser(data)
    navigate('/')
  }
  return (
    <div className='form-container'>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <span className='form-title'>Bienvenido</span>
     <input
        type="text"
        className='form-input'
        placeholder='Nombre de usuario'
        {...register('username', {
            required : 'Debe ingresar su nombre de usuario'
          }
        )
      } />
      <p>{errors.username?.message}</p>
     
     <input
        type='password'
        className='form-input'
        placeholder='Contraseña'
        {...register(
            'password',
            {
              required : 'Debe ingresar su contraseña'
            }
          )
        }
     />
        <p>{errors.password?.message}</p>
      
       <button type='submit' className='form-submit'>Iniciar Sesión</button>
    </form>
   </div>
  )
}


export default Inicio;
