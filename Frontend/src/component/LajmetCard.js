import React, {useEffect, useState} from "react";
import './LajmetCard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LajmiService from '../services/LajmiService';
import LajmId from "../LajmiId";
import LajmetId from "./LajmetId";
import Slideri from "./Slideri";
import { Link } from "react-router-dom";
import { format } from 'date-fns'


function LajmetCard() {

   
  const [input, setInput] = useState("");
  var mode=localStorage.getItem(1);
  if(mode=="dark"){
    
  }else{
    
  }
  let [count,setCount]= useState([0]);
    const [lajmet, setLajmet] = useState([])

    useEffect(()=>{
     LajmiService.gjejLajmet().then((response)=>{
        setLajmet(response.data)
        console.log(response.data)
     }).catch(error=>{
        console.log(error);
     })
    }, [])
    var time=lajmet.data;
    var date=new Date(time);
    return (
      
    <div class="cards-wrapper row " id="card-wrapper">
    
        {
            lajmet.map(
                lajm=>
<div class="card karta col-lg" id={"karta"+count++} >
    <div className="foto-card">
    <img src={lajm.fotografia} class="card-img-top img-fluid" alt="..."/>
    </div>
    <div class="card-body">
      <h5 class="card-title">{lajm.pershkrimi}</h5>
      <p class="card-text">{lajm.titulli.substring(0,120)} ...</p>
      <p className="d-none">{lajm.id}</p>
      <input className="d-none" value={lajm.id} onInput= {(e)=> setInput(e.target.value)} />
      <Link to={'lajm/'+lajm.id}>
        <a className="btn btn-primary text-white" target="_blank">Lexo më shumë</a> 
      </Link>
    
      <div><p className="ora"><i class="bi bi-alarm mr-2"></i>{lajm.ora}</p><p className="data"> <i class="bi bi-calendar mr-2"></i>
 {format(lajm.data, 'dd/MM/yyyy')} </p></div>
      
    </div>
  </div>
            )
            
        }

</div>
  )
}

export default LajmetCard