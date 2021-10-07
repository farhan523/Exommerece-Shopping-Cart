import React,{useContext,useState,useRef} from "react";
import "../App.css";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";

import {Context} from '../App'
import AddedProducts from './AddedProducts'
import Header from './Header'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Products from "./Products";
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function Navbar() {

 
    let state = useContext(Context);
    console.log(state)

 
  return (
    <>
    
      <div className="navbar">
        <div>

          <Link to="/" style={{textDecoration:'none'}}>
          <h1 style={{color:'black',textDecoration:'none'}}>High Street</h1>  
          </Link>
          
        </div>

        <div>
        
          <Link to="/AddedProducts">
            <Badge color="secondary" badgeContent={state.count}>
              <ShoppingCartIcon style={{color:'black'}} />{" "}
            </Badge> 
          </Link>

        </div>
      

      </div>
      <Header/>
      <Switch>
          <Route path="/AddedProducts">
            <AddedProducts/>
          </Route>
          <Route path="/">
            <Products/>
          </Route>
      </Switch>
       
    </>
  );
}

export default Navbar;
