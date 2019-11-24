import React from 'react'
import {connect} from "react-redux"
import classes from "./Details.module.css"
import {Link} from "react-router-dom"





const Details=(props) => {


  

  
   

      
    const Id=props.location.state.id
    const reqProduct = props.storeProducts.filter((x) => x.id===Id)
    const final=reqProduct[0]
    
    //console.log(final)

   

   

    
    return (
        <div className="container py-5">
        <div className="row">

           <div className="col-10 mx-auto text-center text-slanted my-5">
               <h2 className={classes.heading}>{final.title}</h2>

               
            </div>
            

        </div>

        <div className="row">
              
        <div className="col-10 mx-auto col-md-6 my-3">
        <img src={final.img} className="img-fluid"  alt={final.title} />
      </div>

      <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h4 className={classes.text}>model : {final.title}</h4>

                  <h4 className="text-muted mt-3 mb-2">
                    made by : <span className="text-uppercase">{final.company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price : <span>$</span>
                      {final.price}
                    </strong>

                </h4>

                <p className="text-capitalize text-muted font-weight-bold mt-3 mb-0">
                    some info about product :
                  </p>

                  <p >{final.info}</p>

                  <div>
                    <Link to="/">
                     <button className={classes.button}>Back to Products</button>
                    </Link>

                         
                             
                    </div>

      </div>
            
        </div>
            
        </div>
    )
}




const mapStateToProps =(state)=>{

    return{
        storeProducts:state.str.products
    }
}


const mapDispatchToProps = dispatch => {

  return{
  
      onAddCart:(Id,Name,Img,Price)=> dispatch({type:'ADD TO CART',payload :{id:Id, name:Name,img:Img,price:Price }})
  
  }

}
export default connect(mapStateToProps,mapDispatchToProps)(Details)

