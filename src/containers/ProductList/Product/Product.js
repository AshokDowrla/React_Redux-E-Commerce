import React from 'react'
import classes from "./Product.module.css"
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class Product extends React.Component {
   state={
       inCart:false,
       
      
   }
   
   componentDidMount(){
    const Id =this.props.cart.find(x=>x.id===this.props.id)
    //console.log(Id)
    if(Id){
        this.setState({
            inCart:true
        })
    }
   }

  
    
    
    render(){
       // console.log(this.props)
    return (
     
         

           
      
        <span className="col-6 mx-auto col-md-6 col-lg-3 my-3">
        
        <div className='card'>
        
        <div
                  className="img-container p-5">

                  <Link to={{pathname:"/details", state:{id:this.props.id , inCart:this.state.inCart }}}>
                   <span className={classes.image}> <img src={this.props.img} alt={this.props.name} className="card-img-top" /></span>
                  </Link>
            
                    
                  <button
                    className={classes.cartbtn}
                    disabled={this.state.inCart}

                    onClick={()=>{
                        this.props.onAddCart(this.props.id, this.props.name, this.props.img,this.props.price)
                          
                        
                        this.setState({
                            inCart:true,
                            
                        },()=>this.props.onOpenModal(this.props.img,this.props.name,this.props.price))

                    }
                       
                    

                       

                       //console.log('reach')



                    }
                    
                  >
                    {this.state.inCart ? (
                      <p className="text-capitalize mb-0" disabled>
                        in cart
                      </p>
                    ) : (
                      <i className="fas fa-cart-plus" />
                    )}
                  </button>

              </div>  
          <div className="card-footer d-flex justify-content-between">
              <p className='align-self-center mb-0 '><span className={classes.title}>{this.props.name} </span></p>
              
              <span className={classes.title}>
                <span className="mr-1">$</span>{this.props.price}
                </span>
          </div>
           


        </div>
       
        </span>

     
        
        
    )
}

}
const mapStateToProps = state => {
    return {

        cart:state.crt.cart
    }
};


const mapDispatchToProps = dispatch => {

    return{
    
        onAddCart:(Id,Name,Img,Price)=> dispatch({type:'ADD TO CART',payload :{id:Id, name:Name,img:Img,price:Price }}),
        onOpenModal:(img,name,price)=> dispatch({type:'OPEN MODAL',payload:{img:img,name:name,price:price}})
    
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Product)