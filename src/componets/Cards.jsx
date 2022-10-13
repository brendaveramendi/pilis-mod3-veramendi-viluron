import Card from "./Card";
import { useContext } from 'react'
import { CardContext } from "../context/CardContext";

const Cards = ()=>{
    const {cardsColection, setCardsColection} = useContext(CardContext)
    
    const deleteCard = id =>{
        const cardsActualizadas = cardsColection.filter(card=> card.id !== id);
        setCardsColection(cardsActualizadas)
        console.log(cardsActualizadas);
      }

    return (

        <div>
        <h1>Hola desde Cards</h1>
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