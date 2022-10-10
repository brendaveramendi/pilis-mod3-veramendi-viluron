import Card from "./Card";
const Cards = ({cards,deleteCard})=>{
    return (
        <div>
        <h1>Hola desde Cards</h1>
        {cards.map(card=>(
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