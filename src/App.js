import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProductList from './containers/ProductList/ProductList';
import {Route, Switch} from "react-router-dom"
import Details from "./components/Details/Details"
import Cart from "./components/Cart/Cart"
import Modal from './components/Modal/Modal';

const App=(props) => {
  //console.log(props.show)
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
      <Route exact path="/" component={ProductList} />
      <Route path="/details" component={Details} />
      <Route path="/cart" component={Cart} />
    </Switch>
    <Modal />
    </React.Fragment>
  );
}




export default (App);
