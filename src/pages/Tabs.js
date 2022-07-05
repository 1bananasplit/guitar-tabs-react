import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { cardsList } from '../components/cards-list'
import '../styles/tabs.css'


export default function Tabs() {
    const name = useParams();
    const [cards] = useState(cardsList);
    const [tab, setTab] = useState([])

    useEffect(() => {
    const obj = cards.map(card =>{ 
         if(name.nom === card.nom){
          return card}})
        
          const good = obj.filter(element => { return element != undefined})

          setTab(good[0])
          console.log(good)
    },[])
      // console.log(tab)

return (
     <div className='tabs'>
        <iframe  src={`https://www.youtube.com/embed/${tab.link}`} allowfullscreen></iframe>
        <h1>{tab.authors}</h1>
        <h2>{tab.nom}</h2>
        <NavLink to={'/'} className='back'>Retour</NavLink>
     </div>
   )
 }
   
