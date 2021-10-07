import React,{useContext} from 'react'
import "../App.css";
import {useSelector,useDispatch} from 'react-redux'
import {Context} from '../App'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Products() {

    let count = useContext(Context);
    let dispatch = useDispatch()

    let state = useSelector(state=> state)
    console.log(state)

    

    return <>
        <div className="products">
          

           {state.map((item)=>{ return  <div className="items">
                <div className="imagecard" >
                    <img src={item.url}/>
                </div>
                <h3>Price : {item.price}$</h3>
                <button onClick={()=>{count.setCount(++count.count);toast('Product Added to Cart!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
}); dispatch({type:'ADD_ITEM', id: item.id});}}>Add to Cart</button>
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

export default Products
