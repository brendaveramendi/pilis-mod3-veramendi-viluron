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
                    <p>Ciudad:{city}</p>   
                    </div>
                    <div className="card-description">
                     <p>Latitud:{latitude}</p>
                     <p>Longitud:{longitude}</p>
                     <p> <WiThermometer /> Temperatura:{temperature}</p> 
                     <p><WiStrongWind /> Viento:{windspeed} </p>  
                     <div> 
                      <FaRegWindowClose  
                      onClick={()=>deleteCard(id)}
                      />
                      </div> 
                    </div>
                </div>
                
        </ div>
                
    )
}
export default Card;