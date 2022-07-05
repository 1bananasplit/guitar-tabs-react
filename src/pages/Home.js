import React, { useState } from 'react'
import Card from '../components/Card'
import { cardsList } from '../components/cards-list'
import '../styles/home.css'

export default function Home() {

  const [cards, setCards] = useState(cardsList)

  return (
    <div className='home'>
      <div className='container'>
        {cards.map(e => <Card nom={e.nom} authors={e.authors} link={e.link} />)}
      </div>
    </div>
  )
}
