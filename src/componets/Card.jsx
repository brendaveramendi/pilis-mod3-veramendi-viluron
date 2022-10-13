import './Card.css';
import {WiThermometer, WiStrongWind} from "react-icons/wi";
import { FaRegWindowClose } from "react-icons/fa";

const Card = ({id,card,deleteCard})=>{
 const {latitude,longitude,city, temperature, windspeed,image}= card;
    return (
        <div key={id} className="card">   
          <FaRegWindowClose  className='close'
                      onClick={()=>deleteCard(id)}
                      />     
                <div className='face front'>  
                                  
                     <img className='image-style' src={image} alt="" />
                      <p>Ciudad:{city}</p>   
                </div>
                    <div className="face back">
                     <p>Latitud:{latitude}</p>
                     <p>Longitud:{longitude}</p>
                     <p> <WiThermometer className='temp'/> Temperatura:{temperature} °C</p> 
                     <p><WiStrongWind className='wisp'/> Viento:{windspeed} Km/h</p>  
                      
                    </div>          
        </ div>
                
    )
}
export default Card;