import React from 'react'
import HederiSekondar from './HederiSekondar'

function HederiAkademis() {
 

    return (
    <div>
 <div class="header-dark" style={{height: "90px", background: "#22303C"}}>
        <nav class="navbar navbar-dark navbar-expand-md navigation-clean-search">
            <div class="container mb-5 pb-5"><img src='https://upload.wikimedia.org/wikipedia/en/thumb/6/61/FC_Malisheva.svg/1200px-FC_Malisheva.svg.png' style={{width: "60px", height: "60px"}}/><a class="navbar-brand mx-4" href="#">KF-Malisheva</a><button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse ml-5 pl-5"
                    id="navcol-1">
                    <ul class="nav navbar-nav" >
                        
                        <li class="nav-item" role="presentation" ><a class="nav-link" href="http://localhost:3000" style={{color: "white"}}>Home</a></li>

                        <li class="nav-item"><a class="nav-link" data-toggle="dropdown" aria-expanded="false" href="http://localhost:3000/orari" style={{color: "white"}}>Orari </a>
                            <div class="dropdown-menu" role="menu"><a class="dropdown-item" role="presentation" href="#" style={{color: "white"}}>Stadiumi</a><a class="dropdown-item" role="presentation" href="#">Second Item</a><a class="dropdown-item" role="presentation" href="#">Third Item</a></div>
                        </li>
                        <li class="nav-item" role="presentation"><a class="nav-link " href="http://localhost:3000/njoftimet" style={{color: "white"}}>Njoftimet</a></li>
                        <li class="nav-item" role="presentation"><a class="nav-link " href="http://localhost:3000/akademia" style={{color: "white"}}>Apliko</a></li>
                        <li class="nav-item" role="presentation"><a class="nav-link " href="http://localhost:3000" style={{color: "white"}}>Logout</a></li>

                  
                      
                        
                    </ul>
                    <a classList="btn" role="button" id="d" onClick={()=> darkMode()}>Dark Mode</a><a class="btn action-button" role="button" id="white" onClick={()=> whiteMode()}>White Mode</a></div>
            </div>
        </nav>
    
    </div>
</div>
  )
    
}

export default HederiAkademis