import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorLayout } from './layouts'
import { Login, Register } from './pages';
const ErrorPage = ()=>{
  return(
    <React.Fragment>
      <p className="">Oops... Page not found!</p>
      <ErrorLayout/>
    </React.Fragment>
  );
}

const HomePage = () =>{
  return(
    <React.Fragment>
      <App />
    </React.Fragment>
  );
}

const LoginPage = () =>{
  return(
    <React.Fragment>
      <Login />
    </React.Fragment>
  );
}
const RegisterPage = () =>{
  return(
    <React.Fragment>
      <Register/>
    </React.Fragment>
  );
}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/home" Component={App} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/register" Component={RegisterPage} />
          <Route path="/*" Component={ErrorPage} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
