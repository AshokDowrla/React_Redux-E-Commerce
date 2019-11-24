import React from 'react'
import { connect } from 'react-redux';
import classes from "./CartItem.module.css"
import { Link } from "react-router-dom";
const CartItem =(props) => {
    //console.log(props)
    return (
        <div className="row mx-auto my-4 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2 justify-content-center">
        <Link to={{pathname:"/details", state:{id:props.id,inCart:true  }}} >
        <img
          src={props.img}
          style={{ width: "5rem", heigth: "5rem" }}
          className="img-fluid"
          alt=""
        />
        </Link>
      </div>  
     
      <div className="col-10 mx-auto my-auto col-lg-2 justify-content-center">
      <span className={classes.element}>{props.name}</span>
    </div>
 
     
    <div className="col-10 mx-auto my-auto col-lg-2 justify-content-center">
    <strong>
    ${props.price}
    </strong>
    
    </div>



    <div className="col-10 mx-auto  col-lg-2 my-auto ">
    <div className="d-flex justify-content-center">
      
    <div  >
    <span
     className="btn btn-black mx-1"
     onClick={
        (props.count===1)? () =>props.deleteProduct(props.id) :

   
        
        ()=>props.onDecrement(props.id)
    
    }
     >
                
      <span className={classes.element}> -</span>
   </span>

   <span className="btn btn-black mx-1"><span className={classes.element}>{props.count} </span></span>

   <span
    className="btn btn-black mx-1" onClick={()=>props.onIncrement(props.id)}>
                
              
    <span className={classes.element}> + </span>
    </span>

    </div>
    
    </div>

    </div>

    <div className="col-10 mx-auto my-auto col-lg-2 justify-content-center ">
    <div className=" cart-icon"  onClick={() =>props.deleteProduct(props.id)}>
      <i className="fas fa-trash" />
    </div>
  </div>
      

  <div className="col-10 mx-auto my-auto col-lg-2 justify-content-center ">
          <strong>item total : {props.totalprice} </strong>
        </div>

       


        


        
        
       

        </div>
    )
}


const mapStateToProps = state => {
    return {

        cart:state.crt.cart,
        subtotal:state.crt.subtotal
    }
};


const mapDispatchToProps = dispatch => {

    return{

       onIncrement:(Id)=>dispatch({type:'INCREMENT' ,payload:Id}),
       onDecrement:(Id)=>dispatch({type:'DECREMENT' ,payload:Id}),
       deleteProduct:(Id)=>dispatch({type:'DELETE', payload:Id})
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(CartItem)
