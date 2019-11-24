import React from 'react'
import classes from './OrderProduct.module.css'
import { Link } from "react-router-dom";
const OrderProduct =(props) =>{
  
    return (
       


        <div style={{textAlign:'center'}}>
            <h5>Item Added To Cart</h5>
            <img src={props.info.img} alt="" style={{width:'290px'}}  />
            <h5>{props.info.name}</h5>
            <h5 className="text-muted">Price : ${props.info.price}</h5>

            
              <div className={classes.button} onClick={props.clicker}>
          
            
        
              Continue Shopping
            
          
          
               </div>


                      <Link to="/cart">
                        <div className={classes.button}
                         
                          onClick={props.clicker}
                          style={{marginLeft:'4px'}}
                        >
                          Go To Cart
                        </div>
                      </Link>
          
         </div>

    )
}


export default OrderProduct
