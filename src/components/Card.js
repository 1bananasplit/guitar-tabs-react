import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/card.css'

export default function Card (props) {
  return (
    <div>
        <NavLink to={`/tab/${props.nom}`} className='card' key={props.nom}>
                <span>
                    <h3>{props.authors}</h3>
                    <p> {props.nom}</p>
               </span>   
                <img src={`https://i.ytimg.com/vi/${props.link}/hq720.jpg`}></img>
           </NavLink>
    </div>
  )
}
