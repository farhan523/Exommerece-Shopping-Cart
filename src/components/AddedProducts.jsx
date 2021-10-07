import React,{useContext} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Context} from '../App'
import "../App.css";

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddedProducts() {
    
  
    let dispatch = useDispatch()
    let count = useContext(Context);
    let state = useSelector(state=> state)
    console.log(state)

    let items = state.filter((item)=>{ return item.amount > 0})
    console.log(items)
    return <>
        <div className="products">
        
              {items.map((item)=>{ return  <div className="items">
                <div className="imagecard" >
                    <img src={item.url}/>
                </div>
                <div className="quantity">
                <h3>Price : {item.price}$</h3>
                    <div>
                        <AddIcon className="addicon" onClick={()=>{count.setCount(++count.count);toast('Product Added To cart!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
});dispatch({type: 'ADD_ITEM',id : item.id})}}/>  
                        <RemoveIcon className="removeicon" onClick={()=>{count.setCount(--count.count);toast('Product removed from cart', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
});dispatch({type: 'DELETE_ITEM',id : item.id})}}/> 
                   </div>
                </div>
                
                <div className="billing">
                    <p>Quantity : {item.amount}</p>
                    <h4>Total price: {item.amount * item.price} $</h4>
                   
                </div>
            </div>})}
        
        </div>
        <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
                {/* Same as */}
            <ToastContainer />
    </>
}

export default AddedProducts
