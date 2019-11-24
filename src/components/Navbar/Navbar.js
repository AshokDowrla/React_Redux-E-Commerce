import React from 'react'
import {Link} from "react-router-dom"
import logo from "../../assets/Logo/icon.svg"
import classes from "./Navbar.module.css"
const Navbar=() => {
    return (
        <div className={classes.Nav}>
        <nav className={"navbar navbar-expand-sm navbar-dark px-sm-5"}>

           <Link to="/" >
             <img src={logo} alt="Store_img" className="navbar-brand"/>
           
           </Link>

        <div className={classes.products}>
        <ul className="navbar-nav align-items-center">
          
          <li className="nav-item ml-5">
          <Link to="/" className={classes.text}>
           products
        </Link>
          
          </li>
          

          </ul>
          </div>


          <Link to="/cart" className="ml-auto">
          <div className={classes.mycart}>
          
            
          <span className="mr-2">
              <i className="fas fa-cart-plus " />
            </span>
              my cart
            
          
          
          </div>
          </Link>
          
        </nav>

        </div>

        
    )
}

export default Navbar
