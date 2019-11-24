import React from 'react'
import classes from "./Modal.module.css"
import { connect } from 'react-redux';
import OrderProduct from "./OrderProduct/OrderProduct"
import Backdrop from "../BackDrop/BackDrop"
const Modal =(props) => {
    //console.log(props)
    return (

        <div>
        <Backdrop show={props.show.show} clicked={props.modalClosed}/>
        <div style={{
            transform: props.show.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show.show? '1' : '0',
            width:'400px',
            
        }} 
         className={classes.Modal}>


        <OrderProduct info={props.show} clicker={props.modalClosed}/>
            
        </div>

        </div>

        
    )
}

const mapStateToProps = state => {
    return {
       
       show:state.crt.modalOpen
    }
  };

const mapDispatchToProps=dispatch=>{


    return{
         modalClosed:()=>dispatch({type:'CLOSE MODAL'})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Modal)