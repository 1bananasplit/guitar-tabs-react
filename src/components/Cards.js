import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { cardsList } from './cards-list'
import Add from './Add'
import '../styles/cards.css'

export default function Cards() {
    const [cards] = useState(cardsList)

  return (
    <div className='cards'>
       {cards.map(e =>  
            <NavLink to={`/tab/${e.nom}`} className='card' key={e.nom}>
                <span>
                    <h3>{e.authors}</h3>
                    <p> {e.nom}</p>
               </span>   
                <img src={`https://i.ytimg.com/vi/${e.link}/hq720.jpg`}></img>
           </NavLink>)}
           {/* <Add /> */}
    </div>
  )
}
 