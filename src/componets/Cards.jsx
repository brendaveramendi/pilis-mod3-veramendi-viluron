import Card from "./Card";
import { useContext } from 'react'
import { CardContext } from "../context/CardContext";
import {deleteWeather} from "../services"
import './Cards.css';

const Cards = ()=>{
    const {cardsColection, setCardsColection} = useContext(CardContext)
    
    const deleteCard = id =>{
        const cardsActualizadas = cardsColection.filter(card=> card.id !== id);
        setCardsColection(cardsActualizadas)
        deleteWeather(id)
        
      }

    return (

        <div className="container  ">
             
              {cardsColection.map(card=>(
                 <Card 
                  key={card.id}
                  id={card.id}
                  card={card}
                  deleteCard={deleteCard}/> 
              ))
              }
          
        </div>
        
    )
}
export default Cards;