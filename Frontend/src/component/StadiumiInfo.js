import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import LajmiService from '../services/LajmiService';
import  {useEffect, useState} from "react";

function StadiumiInfo() {
    const [stadiumi, setStadiumi] = useState([])

    useEffect(()=>{
    LajmiService.getStadiumin().then((response)=>{
        setStadiumi(response.data)
        console.log(response.data)
     }).catch(error=>{
        console.log(error);
     })
    }, [])
 
    return (
    <section class=" mt-5 p-5 bg-primary">
      <div class="container">
        <div class="row g-4">
          <div class="col-md mt-5 pt-5">
          <h2 class="text-center mb-4">Informacione ne lidhje me Stadiumin</h2>
            <ul class="list-group list-group-flush lead">
              <li class="list-group-item">
                <span class="fw-bold ">Emri:</span> <span class="">
                    Liman Gegaj
                </span>
              </li>
              <li class="list-group-item">
                <span class="fw-bold ">Kapaciteti:</span>  <span class="">
                   </span>
                    {
                       stadiumi.map(
                        stadium=>
                        <p>{stadium.kapaciteti}</p>
                       )
                    }
                    
              </li>
              <li class="list-group-item">
                <span class="fw-bold ">Lokacioni:</span> <span class="r">127 (Albania)</span> 
              </li>
              <li class="list-group-item">
                <span class="fw-bold">Madhesia e fushës:</span>  <span class=""> 02 381 1575 (Albania)</span> 
                
              </li>
              <li class="list-group-item">
                <span class="fw-bold ">I ndërtuar me: </span><span class="">+355 4 221 1111(Albania)</span>
                
              </li>
              </ul>
              <a href="#" class="btn btn-dark mt-3">
              <i class="bi bi-chevron-right"></i> Rezervo Ulesen
            </a>
          </div>
          <div class="col-md text-center">
            <div id="map" ></div>
           <img src='https://scontent.fprn7-1.fna.fbcdn.net/v/t1.6435-9/119602857_1201517703567089_2422755645480078964_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=FoVxG42s9y8AX8gazij&_nc_ht=scontent.fprn7-1.fna&oh=00_AT82SXx7V_qfGipNNkFtkAi9-hM_lODYVlNOsm0ZVIvURg&oe=6326824C' className='w-100 h-75 pt-5 mt-4' id='stadiumi-foto'/>
          </div>
          </div>
          </div>
          </section>
  )
}

export default StadiumiInfo