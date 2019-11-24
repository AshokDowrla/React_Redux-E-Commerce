import React from "react"
import { connect } from 'react-redux';
import classes from "./Cart.module.css"
import EmptyCart from "./EmptyCart/EmptyCart"
import Title from "../Title/Title"
import CartColumns from "./Column/Column";
import CartItem from "../Cart/CartItem/CartItem"
const Cart=(props)=>{
    //console.log(props.cart)
    if(props.cart.length>0){
return(

       <React.Fragment>
    
    <Title name="your" title="cart" />

    <CartColumns />
    <div className="container-fluid">
    {props.cart.map((x) =><CartItem key={x.id} id={x.id} img={x.img} name={x.name} price={x.price} count={x.count} totalprice={x.totalprice} />)


    }


    
    
    </div>

    <div className="container">

        <div className="row">


        <div className="col-10 mt-4 ml-4 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
           <div className={classes.Total}><strong >Total price: {props.subtotal}</strong></div>


                <div >
                  <button
                    className="btn btn-outline-danger text-uppercase mb-3 px-5 mt-10"
                    type="button"
                    onClick={props.onClearCart
                    }
                  >
                    clear cart
                  </button>

                  </div>


                  <div>
                  <button
                   
                    type="button"
                   className={classes.btn}
                  >
                    order now
                  </button>
                  </div>
              
          </div>
        </div>
        </div>

    </React.Fragment>

)
    }

    else{
        return <EmptyCart />
    }
}


const mapStateToProps = state => {
    return {

        cart:state.crt.cart,
        subtotal:state.crt.subtotal
    }
};

const mapDispatchToProps = dispatch => {

    return{
        onClearCart:()=>dispatch({type:'CLEAR CART'})
    }


}


export default connect(mapStateToProps,mapDispatchToProps)(Cart)