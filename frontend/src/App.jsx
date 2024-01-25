import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Categries from "./components/Catergories";
import CategoriesObject from "./components/CatergoriesObject";
import { BrowserRouter, Routes , Route} from "react-router-dom";
import Landing from "./components/Landing";
import RenderFashion from "./components/RenderFashion";

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/category/fashion' element={<RenderFashion />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
