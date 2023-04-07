import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LajmiService from "../services/LajmiService";

function Partneret() {
    
    const[sponzoret,setSponzoret]=useState([])

    useEffect(()=>{
     LajmiService.gjejSponzoret().then((response)=>{
       setSponzoret(response.data)
        console.log(response.data)
     }).catch(error=>{
        console.log(error);
     })
    }, [])

    return (
    <section id="clients" class="section-bg pb-5 mb-5" style={{backgroundColor: "#cecccc"}}>
      <div >
      <div class="section-header pt-5">
          <h3>Partnerët Tanë</h3>
          <p>Një falenderim i veçant për</p>
          <div class="row no-gutters clients-wrap clearfix wow fadeInUp">
         {
          sponzoret.map(
          sponzori=>
          <div class="col-lg-3 col-md-4 col-xs-6  px-5 pt-4 pb-5 mr-1" id="fotografia-sponzorit" style={{border: "1px solid", borderRadius: "5px"}}>
          <div class="client-logo">
            <img src={sponzori.fotografia} alt="" className=" img-fluid pt-5 pb-5"/>
          </div>
        </div>
          )
         } 
          
          
         
          </div>
        </div>
      </div>

  </section>
  )
}

export default Partneret