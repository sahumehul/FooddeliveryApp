import React from "react";
import "./App.css"
import { Home } from "./screens/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from "./screens/Signup.js";
import { Cartprovider } from "./componants/Contextreducer.js";
import Cart from "./screens/Cart.js";

function App() {
  return (
   <>
 <Cartprovider>
 <BrowserRouter>
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route  path="/createuser" element={<Signup/>}/>
        <Route  path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
   </BrowserRouter>
 </Cartprovider>
   </>
  );
}

export default App;
