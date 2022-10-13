import {createContext, useState} from "react";

export const CardContext = createContext({
    cardsColection: [],
    setCardsColection: () =>{}
})

export const CardsProvider = ({children})=>{
const [cardsColection,setCardsColection] = useState([])
const value = {cardsColection, setCardsColection}
return <CardContext.Provider value={value}>{children}</CardContext.Provider>
}