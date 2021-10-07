import React,{useContext} from "react";
import "../App.css";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";


import {Context} from '../App'
import AddedProducts from './AddedProducts'
import Header from './Header'

import {
  Switch,
  Route,
  Link,

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
