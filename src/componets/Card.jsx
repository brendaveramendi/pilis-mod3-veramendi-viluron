import './Card.css';
import {WiThermometer, WiStrongWind} from "react-icons/wi";
import { FaRegWindowClose } from "react-icons/fa";

const Card = ({id,card,deleteCard})=>{
 const {latitude,longitude,city, temperature, windspeed,image}= card;
    return (
        <div className="container">       
                <div key={id} className="card-container">
                    <div className="card-image">
                    <img className='image-style' src={image} alt="" />
                    <p>Ciudad: {city}</p>   
                    </div>
                    
                    <div className="card-description">
                    <div className='eliminar'> 
                      <FaRegWindowClose  
                      onClick={()=>deleteCard(id)}
                      />
                      </div> 
                     <br /><p>Latitud:{latitude}</p>
                     <br /><p>Longitud:{longitude}</p>
                     <br /><p> <WiThermometer /> Temperatura:{temperature}</p> 
                     <br /><p><WiStrongWind /> Viento:{windspeed} </p>  
                     
                    </div>
                </div>
                
        </ div>
                
    )
}
export default Card;