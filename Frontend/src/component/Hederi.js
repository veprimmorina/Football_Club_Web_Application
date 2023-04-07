import React from 'react'
import './Hederi.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BodyText } from 'react-bootstrap-icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

function Hederi() {

    var mode="White";
    
 function darkMode(){
    localStorage.setItem(1,"dark")
    var butoniDark=document.getElementById('d');
    butoniDark.classList.add("action-button");
    var butoniWhite=document.getElementById('white');
    butoniWhite.classList.remove('action-button')
    var cardDark=document.getElementById('card-color');
   cardDark.classList.add('bg-dark');
    document.body.classList.add("bg-dark");
    var tableBody=document.getElementById('table-body');
    tableBody.classList.add('text-light');
    var karta=document.getElementById('karta0');
    karta.classList.add('bg-dark');
    var karta=document.getElementById('karta1');
    karta.classList.add('bg-dark');
    var karta=document.getElementById('karta2');
    karta.classList.add('bg-dark');
    var kartaText=document.getElementById('card-wrapper');
    kartaText.classList.add('text-light');
    var partneret=document.getElementById('clients');
    partneret.classList.add('bg-dark');
    partneret.classList.add('text-light');
    mode="Dark";
    localStorage.setItem(mode);

 }

 function whiteMode(){
    localStorage.setItem(1, "white")
    var butoniDark=document.getElementById('d');
    butoniDark.classList.remove("action-button");
    var butoniWhite=document.getElementById('white');
    butoniWhite.classList.add('action-button')
    var cardDark=document.getElementById('card-color');
   cardDark.classList.remove('bg-dark');
    document.body.classList.remove("bg-dark");
    var tableBody=document.getElementById('table-body');
    tableBody.classList.remove('text-light');
    var karta=document.getElementById('karta0');
    karta.classList.remove('bg-dark');
    var karta=document.getElementById('karta1');
    karta.classList.remove('bg-dark');
    var karta=document.getElementById('karta2');
    karta.classList.remove('bg-dark');
    var kartaText=document.getElementById('card-wrapper');
    kartaText.classList.remove('text-light');
    var partneret=document.getElementById('clients');
    partneret.classList.remove('bg-dark');
    partneret.classList.remove('text-light');
    mode="White";
    localStorage.setItem(mode);
 }

    return (
        
    <div>
        <div class="header-dark text-dark">
            <nav class="navbar navbar-dark navbar-expand-md navigation-clean-search">
                <div class="container mb-5 pb-5"><img src='https://upload.wikimedia.org/wikipedia/en/thumb/6/61/FC_Malisheva.svg/1200px-FC_Malisheva.svg.png' style={{width: "60px", height: "60px"}}/><a class="navbar-brand mx-4" href="#">KF-Malisheva</a><button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse ml-5 pl-5"
                        id="navcol-1">
                        <ul class="nav navbar-nav ">
                            
                            <li class="nav-item" role="presentation"><a class="nav-link" >Home</a></li>
                            <li class="dropdown"><a class="dropdown-toggle nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="http://localhost:3000/akademia">Akademia </a>
                                <div class="dropdown-menu" role="menu"><a class="dropdown-item" role="presentation" href="#">Stadiumi</a><a class="dropdown-item" role="presentation" href="#">Second Item</a><a class="dropdown-item" role="presentation" href="#">Third Item</a></div>
                            </li>
                            <li class="nav-item" role="presentation"><a class="nav-link " href="#">Ndeshja e Fundit</a></li>
                            <li class="nav-item" role="presentation"><a class="nav-link " href="http://localhost:3000/gjitha/lajmet">Lajme</a></li>

                          
                            
                        </ul>
                        <a classList="btn" role="button" id="d" onClick={()=> darkMode()}>Dark Mode</a><a class="btn action-button" role="button" id="white" onClick={()=> whiteMode()}>White Mode</a></div>
                </div>
            </nav>
            <div class="container hero mt-5 pt-5">
                <div class="row">
                    <div class="col-md-8 offset-md-2">
                        <h1 class="text-center text-dark invisible">KF Malisheva.</h1>
                        <div class="embed-responsive invisible embed-responsive-16by9"><iframe class="embed-responsive-item"></iframe></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hederi