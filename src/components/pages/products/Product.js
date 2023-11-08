import React from 'react'
import './Product.css'
import { data_product} from '../../../data'
import Item from '../../item/product_item'
import Layout from '../../layout/layout'


const Product = () => {
  return (
    
        <Layout className="adopt">
           <center><h1> All products</h1></center> 
             <hr />
                <div className="adopt-item">
                    {data_product.map((item,i) => {
                        return <Item key={i} id={item.id} name={item.name} image={item.image } new_price={item.new_price} old_price={item.old_price}/>
                    })}
                </div>
            </Layout>
   
 
        
    
  )
}

export default Product