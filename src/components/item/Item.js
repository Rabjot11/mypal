import React from 'react'
import  './Item.css'

function Item(props) {
  return (
    <div className='item'>
        <img src={props.image} alt=""  width={330} height={450} />
        <p>{props.title}</p>
        <div className='item-content'>
         
            <div className='item-age'>
            {props.age}
            </div>
            <div className='item-breed'>
            {props.breed}
            </div>
            <div className='item-color'>
            {props.color}
            </div>
        </div>
        </div>
  )
}

export default Item