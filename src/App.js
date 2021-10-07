import './App.css';
import React ,{useState,createContext} from 'react';
import {Provider} from 'react-redux'
import store from './config/store'
import Navbar from './components/Navbar'



let Context = createContext()

function App() {

  let [count,setCount] = useState(0)
  

  return (
    
    <Provider store={store}>
     <Context.Provider value={{count: count,setCount}}>
        <div className="App">
              <Navbar />
             
          </div>
     </Context.Provider>
    </Provider>
  );
}

export default App;

export {Context}
