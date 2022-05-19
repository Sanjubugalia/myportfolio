import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import "./component/css/style.css"
import App from './App';
import Home from './component/Home';
import About from"./component/About";
import Header from './component/Header';
import Portfolio from "./component/Portfolio"
import Contact from "./component/Contact"
import Service from "./component/Service"
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
<Header/>
  <Routes>
    <Route path ="/" element={<Home/>}></Route>
    <Route path ="about" element={<About/>}></Route>
    <Route path ="service" element={<Service/>}></Route>
    <Route path ="portfolio" element={<Portfolio/>}></Route>
    <Route path ="contact" element={<Contact/>}> </Route>
  </Routes>
</Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
