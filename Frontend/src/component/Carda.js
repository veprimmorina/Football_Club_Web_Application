
import React, {useEffect, useState, useRef} from "react";
import {Card, Button, CardImg} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carda.css'
import LajmiService from '../services/LajmiService';
function Carda () {
  
  const [futbollistet, setLajmi] = useState([])
  const carousel = useRef(null);
  useEffect(()=>{
    LajmiService.getFutbollistet().then((response)=>{
       setLajmi(response.data)
       console.log(response.data)
    }).catch(error=>{
       console.log(error);
    })
   }, [])

   const handleLeftClick = (e) =>{
    e.preventDefault();
    console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft+= carousel.current.offsetWidth;
   }
   const handleRightClick = (e) =>{
    e.preventDefault();
    console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft-= carousel.current.offsetWidth;
   }
  return (
    <div className='container'>
      <div className='logo'>
        <img src='' />
        <div className='carousel' ref={carousel}>
          {futbollistet.map(
            futbollisti=>
         
          <div class="item">
            <div className='image'>
              <img src={futbollisti.figura} alt='' />

            </div>
            <div className='info'>
              <span className='name'>{futbollisti.emri+" "+futbollisti.mbiemri}</span>
              <span className='h1'><b>{futbollisti.numri>0 ? +futbollisti.numri : ""}</b></span>
              <span className='oldPrice'>{futbollisti.emri=="Dren"&&futbollisti.mbiemri=="Kryeziu" ?  <p> {futbollisti.pozita+"      "} &copy;</p>: futbollisti.pozita}</span>
            </div>
          </div>
           )}
        </div>
        <div className="buttons">
          <button className="left" onClick={handleRightClick}><h1><i class="bi bi-chevron-left"></i></h1>
</button>
          <button className="right" onClick={handleLeftClick}><h1><i class="bi bi-chevron-right"></i></h1>
</button>
        </div>
      </div>
    </div>
  )
}

export default Carda