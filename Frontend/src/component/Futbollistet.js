
import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LajmiService from '../services/LajmiService';
import './Lajmet.css'

function Futbollistet() {

    const [futbollistet, setLajmi] = useState([])

    useEffect(()=>{
     LajmiService.getFutbollistet().then((response)=>{
        setLajmi(response.data)
        console.log(response.data)
     }).catch(error=>{
        console.log(error);
     })
    }, [])

  return (

    <section id="instructors" class="p-5 bg-primary">
        <div class="container"></div>
        <h2 class="text-center text-white">Stafi i KF Malisheves</h2>
        <p class="lead text-center text-white mb-5">
          Lojtarët
        </p>
        <div class="row" id="lojtaret-div">
        <div class="col-md-6 col-lg-3">
        <div class="card bg-light">
        <div class="card-body text-center">

          {
            futbollistet.map(
                futbollisti=>
                <div className="">
                <img src={futbollisti.figura} className="rounded-circle mb-3" width="280px" height="200px" />
                <h3 class="card-title mb-3" id="first-hotel">{futbollisti.emri+" "+futbollisti.mbiemri }</h3>
                <p class="card-text" id={futbollisti.emri+futbollisti.id}>
                  {futbollisti.pozita}</p>
                  <p class="card-text" id="hotel-description">
                  {futbollisti.mosha}</p>
                </div>
                
            )
          }

        
                 
            </div>
            </div>
            </div>
        </div>
    </section>

  )
}
    

export default Futbollistet