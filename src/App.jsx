import { useState } from 'react';

import './App.css'
import Login from './components/Login/Login';
import Dashboard from './components/Dashboards/Dashboard';
function App() {

  const [isLogin,setIsLogin] =useState(false);

  const onLoginHandler = () =>{
    setIsLogin(true);
  }

  return (
    <>
     {!isLogin && <Login login={onLoginHandler} />}
     {isLogin && <Dashboard/>}
    </>
  )
}

export default App
