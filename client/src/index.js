import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bulma/bulma.sass" ;
// import "islider/dev/islider"
import Router from "./Router"
import "./commons/auth"


ReactDOM.render(
    <Router />,document.getElementById('root')
);
