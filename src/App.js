import React from 'react'
import Navbar from './components/Navbar'
import "./App.css";
import Pokemon from './components/Pokemon';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonD from './components/PokemonD';
class App extends React.Component {
  render(){

    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element= {<><Navbar/>
         <Pokemon/> </> }>
        </Route>
        
        <Route path="/about" element=   { <><Navbar/><PokemonD/> </>}>
       
        </Route>
     
      </Routes>
    </BrowserRouter>

)
      
}
}

export default App
