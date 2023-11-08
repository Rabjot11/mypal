import React from 'react'
import  './product_item.css'

function product_item(props) {
  return (
    <div className='item'>
        <img src={props.image} alt=""  width={300} height={300} />
        <p>{props.name}</p>
        <div className='item-content'>
         
            <div className='new_price'>
            ₹{props.new_price}
            </div>
            <div className='old_price'>
            ₹{props.old_price}
            </div>
            
        </div>
        </div>
  )
}

export default product_item