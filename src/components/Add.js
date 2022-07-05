import React from 'react'
import { cardsList } from './cards-list'
import '../styles/add.css'

export default function Add() {

    function addon(){
        cardsList.push(
            {
            authors: 'Yaiba',
            nom: 'Season 2',
            link: 'YCMl6r74r_A',
            id : "0"
            },
            )
    }


  return (
    <div onClick={addon()} className='add'>
        +
    </div>
  )
}
