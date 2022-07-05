import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { cardsList } from './cards-list'
import '../styles/cards.css'

export default function Cards() {
const [cards, setCards] = useState(cardsList)

// const [authors, setAuthors] = useState('')
// const [nom, setNom] = useState('')
// const [link, setLink] = useState('')

// const submit = (e) => {
//   e.preventDefault()

//   cards.push({
//     authors: authors,
//     nom: nom,
//     link: link,
//     },)

//   setAuthors('')
//   setNom('')
//   setLink('')

//   {console.log(cards)}

// }

// const changeAuthors = (e) => {
//     console.log(e.target.value)
//     setAuthors(e.target.value)
// }
// const changeNom = (e) => {
//     console.log(e.target.value)
//     setNom(e.target.value)
// }
// const changeLink = (e) => {
//     console.log(e.target.value)
//     setLink(e.target.value)
// }

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

           {/* <form onSubmit={submit}>
            <input placeholder="L'auteur" type="text" id='authors' value={authors} onChange={changeAuthors}></input>
            <input placeholder="Le nom" type="text" id='nom' value={nom} onChange={changeNom}></input>
            <input placeholder="Le lien" type="text" id='link' value={link} onChange={changeLink}></input>
            <button></button>
        </form> */}
    </div>
  )
}
 