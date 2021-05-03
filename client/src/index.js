import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bulma/bulma.sass" ;
import Router from "./Router";
import "./commons/auth";
// import Memberbanner from "./components/memberhome/Memberbanner"
import "./components/Modal";


ReactDOM.render(
    <Router />,document.getElementById('root')
    // <Memberbanner />,document.getElementById('root')
);
