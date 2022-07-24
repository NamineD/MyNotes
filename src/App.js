import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";

//Components
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {

  const [ isLogin, setIsLogin ] = useState(false);

  return (
    <>
      {isLogin ?
        <>
          <Header />

          <Routes>
            <Route exact path='/login' element={<Login />}/>
            <Route exact path='/' element={<Home />}/>
          </Routes>
        </>
      : <Login isLogin={isLogin} setIsLogin={setIsLogin}/>}
    </>
  );
}

export default App;

