import React from 'react'
import { useEffect, useState } from 'react';
import Cards from '../../componets/Cards'
import { getCards } from '../../services';

function Home() {
  const [cardsColection, setCardsColection] = useState([]);
  useEffect(() => {
    getCards()
    .then(data=>setCardsColection(data))
    .catch(err=> console.log(err))
  }, [])
  const deleteCard = id =>{
    const cardsActualizadas = cardsColection.filter(card=> card.id !== id);
    setCardsColection(cardsActualizadas)
    console.log(cardsActualizadas);
  }
  return (
    <div>
        <h2>Home</h2>
        <Cards cards={cardsColection} deleteCard={deleteCard}/>
    </div>
  )
}

export default Home