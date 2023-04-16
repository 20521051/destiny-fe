import React, { useState } from "react";
import { Footer, Header, SideBar } from "./components/UI";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorLayout } from "./layouts";
import { Login, Register } from "./pages";

const ErrorPage = () => {
  return (
    <div className="Error">
      <p className="">Oops... Page not found!</p>
      <ErrorLayout />
    </div>
  );
};

const LoginPage = () => {
  return (
    <div className="SignIn">
      <Login />
    </div>
  );
};
const RegisterPage = () => {
  return (
    <div className="SignUp">
      <Register />
    </div>
  );
};
const Home = () => {
  return (
    <div className="Home">
      <Header></Header>
      <div>
        <SideBar></SideBar>
      </div>
      <Footer></Footer>
    </div>
  );
};
const App = () => (
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage} />
        <Route path="/*" Component={ErrorPage} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
export default App;
