import { useContext, useEffect, useRef } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import {FaBars, FaTimes} from 'react-icons/fa'
import {WiSolarEclipse} from 'react-icons/wi'
import './Navigation.css';

const Navigation = () => {
   const { currentUser, setCurrentUser } = useContext(UserContext);
   const navRef = useRef();
   const showNavbar = () =>{
    navRef.current.classList.toggle("responsive-nav");
   }

     useEffect(() => {
         const userStored = localStorage.getItem('currentUser')
    console.log({userStored})
    if (userStored) {
      setCurrentUser(JSON.parse(userStored))
    }
  }, [])

   const handleSignOut = () => {
    setCurrentUser(null);
   };

  return (
    <>
      <div  className='navigation'>
        <Link className='logo-container' to='/'>
          <h3>Weather-app <WiSolarEclipse /></h3>
        </Link>
        <div ref ={navRef} className='nav-links-container'>
         {currentUser ? (
            <Link className='nav-link' to='/'>
              Home
            </Link>
          ) : (
            <span className='nav-link'>Home</span>
          )}
          {currentUser ? (
            <Link className='nav-link' to='/formulario'>
              Nueva Tarjeta
            </Link>
          ) : (
            <span className='nav-link'>Nueva Tarjeta</span>
          )}

          {currentUser ? (
            <Link className='nav-link' to='/inicio' onClick={handleSignOut}>
              Cerrar Sesión
            </Link>
          ) : (
            <Link className='nav-link' to='/inicio'>
              Iniciar Sesión
            </Link>
          )}
          <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <FaTimes />
          </button>
         
        </div>
        <button className='nav-btn'>
        <FaBars  onClick={showNavbar}/>
        </button>
      </div>
      <Outlet />
    </>
  );
};


export default Navigation;