import './Card.css';
import {WiThermometer, WiStrongWind} from "react-icons/wi";
import { FaRegWindowClose } from "react-icons/fa";

const Card = ({id,card,deleteCard})=>{
 const {latitude,longitude,city, temperature, windspeed,image}= card;
    return (
        <div key={id} >    
         <FaRegWindowClose  className='close'
                      onClick={()=>deleteCard(id)}
                      />   
        <div className="card">
                <div className='face front'>               
                     <img  src={image} alt="" />
                      <p>Ciudad:{city}</p>   
                </div>
                    <div className="face back">
                     <p>Latitud:{latitude}</p>
                     <p>Longitud:{longitude}</p>
                     <p> <WiThermometer /> Temperatura:{temperature}</p> 
                     <p><WiStrongWind /> Viento:{windspeed} </p>  
                      
                    </div>  
                </div>        
        </ div>
                
    )
}
export default Card;