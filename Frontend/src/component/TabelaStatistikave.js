import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LajmiService from '../services/LajmiService';
import Hederi from "./Hederi";
import HederiSekondar from "./HederiSekondar";

function TabelaStatistikave() {
  
  
  const [futbollistet, setLajmi] = useState([])

    useEffect(()=>{
     LajmiService.getFutbollistetByGoals().then((response)=>{
        setLajmi(response.data)
        console.log(response.data)
     }).catch(error=>{
        console.log(error);
     })
    }, [])

   function merrGjithLojtaret(){
    LajmiService.gjejTopFutbollistet().then((response)=>{
      setLajmi(response.data)
      console.log(response.data)
      var butoniLargimit=document.getElementById('shfaq-gjith-button');
      var butoniShfaqjes=document.getElementById("shfaq-me-pak-button");
      butoniLargimit.classList.add('d-none');
      butoniShfaqjes.classList.remove('d-none');
   })
   }

   function shfaqMePak(){
    LajmiService.getFutbollistetByGoals().then((response)=>{
      setLajmi(response.data)
      console.log(response.data)
      var butoniLargimit=document.getElementById('shfaq-me-pak-button');
      var butoniShfaqjes=document.getElementById("shfaq-gjith-button");
      butoniLargimit.classList.add('d-none');
      butoniShfaqjes.classList.remove('d-none');
   })
   }
  return (
      
    <div class="main-content pb-5 mb-5" >
      
        <div class="container mt-7">  
        <div class="row">
        <div class="col">
        <div class="card shadow" id="card-color">
        <div class="card-header border-0 bg-dark">
        <h3 class="mb-0 text-light"><b>Statistikat e lojtarëve</b></h3>

            </div>   
            <div class="table-responsive">
             
                
                
            <table class="table align-items-center table-flush">
            <thead class="thead-light">
                  <tr>
                    <th></th>
                    <th scope="col">Emri </th>
                    <th scope="col">Mbiemri</th>
                    <th scope="col"></th>
                    <th scope="col">Pozita</th>
                    <th scope="col">Gola</th>
                    <th scope="col">Asistime</th>
                    <th scope="col">Shtetësia</th>
                  </tr>
                  </thead>
                  <tbody className="" id="table-body">
                  {
                futbollistet.map(
                futbollisti=>
                  <tr>
                  <th scope="row">
                  <div class="media align-items-center">
                  <a href="#" class="avatar rounded-circle mr-3">
                  
                
                    <img alt="Image placeholder" src={futbollisti.figura} className="img-fluid"/>
                    
            
                  
                  
                  </a>
                  <div class="media-body">
                 
                    </div>
         
                    </div>
                  </th>
                  <td className="mb-0 text-sm">
                     <b>{futbollisti.emri} </b>
                    </td>
                    <td>
                      {futbollisti.mbiemri}
                    </td>
                    <td>
                      
                      <span class="badge badge-dot mr-4">
                        <i className={futbollisti.pozita=="Sulmues" ? "bg-danger":(futbollisti.pozita=="Mesfushor" ? "bg-success": (futbollisti.pozita=="Mbrojtës" ? "bg-primary" : "bg-dark"))}></i> 
                      </span>
                    </td>
                    <td>
                      {futbollisti.pozita}
                    </td>
                    <td>
                      {futbollisti.golat}
                    </td>
                    <td>
                        {futbollisti.asistimet}
                    </td>
                    <td>

                      <img alt="Image placeholder" src={futbollisti.shtetesia} id="shtetesia"  /> 
                    </td>
                    </tr>
                )
}
                    </tbody>
             
                </table>
                <button className="btn btn-success my-5" id="shfaq-gjith-button" onClickCapture={()=> merrGjithLojtaret()}>Shfaq gjithë lojtaret</button>
                <button className="btn btn-success my-5 d-none" id="shfaq-me-pak-button" onClick={()=> shfaqMePak()}>Shfaq më pak</button>
                </div> 
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default TabelaStatistikave