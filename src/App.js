import './App.css';
import { useEffect, useContext } from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import { getCards } from './services';
import Home from './routes/Home/Home';
import Formulario from './routes/Formulario/Formulario';
import Inicio from './routes/Inicio/Inicio';
import {CardContext} from './context/CardContext';



function App() {
  const {setCardsColection } = useContext(CardContext)
  useEffect(() => {
    getCards()
    .then(data=>setCardsColection(data))
    .catch(err=> console.log(err))
  }, [])

    return (
    <>
     <header>
        <h1>App-Clima</h1>
      <nav>
        <ul>
          <li><Link to='/'>Inicio</Link></li>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/formulario'>Formulario</Link></li>
        </ul>
      </nav>
    </header> 
    <div className="App">
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/home' element={<Home />} />  
        <Route path='/formulario' element={<Formulario />} /> 
      </Routes>
    </div>   
    </>
   
  );
}

export default App;
