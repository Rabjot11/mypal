import React from 'react'
import './Adopt.css'
import {featuredPets, data_product} from '../../../data'
import Item from '../../item/Item'
import Layout from '../../layout/layout'


const Adopt = () => {
  return (
    
        <Layout className="adopt">
           <center><h1> Adopt</h1></center> 
             <hr />
                <div className="adopt-item">
                    {featuredPets.map((item,i) => {
                        return <Item key={i} id={item.id} title={item.title} age={item.age} breed={item.breed} color={item.color} image={item.image } category={item.category}/>
                    })}
                </div>
            </Layout>
   
 
        
    
  )
}

export default Adopt