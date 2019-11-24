import React, { Component } from 'react'
import Title from '../../components/Title/Title'

import Product from './Product/Product'
import { connect } from 'react-redux';

class ProductList extends Component {




    render()
     {
        //console.log(this.props.storeProducts)
        return (
            
           
            <div className="py-5">
               <div className="container">
                  <Title name="our" title="products"/>
                   <div className="row">
                        
                           {this.props.storeProducts.map((x) =>(

                            <Product key={x.id} name={x.title} id={x.id} company={x.company} img={x.img} price={x.price}   />


        ))}
                        
                   </div>
               </div>
            </div>
            
        )
    }
}


const mapStateToProps =(state)=>{

    return{
        storeProducts:state.str.products
    }
}





export default connect(mapStateToProps)(ProductList)