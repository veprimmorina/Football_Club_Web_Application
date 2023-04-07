import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LajmiService from '../services/LajmiService'
import './GjithaLajmet.css'
import { Link } from "react-router-dom";
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
import Lajmet from './Lajmet';
import HederiSekondar from './HederiSekondar'
import Foteri from './Foteri';
import { format } from 'date-fns';


function GjithaLajmet() {
  const [lajmet, setLajmet]=useState([])
  const [data,setData]=useState(null)
  const [print,setPrint]=useState(false)

  useEffect(()=>{
    axios.get("http://localhost:8080/api/lajmet/gjej/lajmet").then((response)=>{
       setLajmet(response.data)
       console.log(response.data)
    }).catch(error=>{
       console.log(error);
    })
    
   }, [])

   function getData(val){
    setData(val.target.value)
    setPrint(false)
   }

   function merrLajmet(){
    axios.get("http://localhost:8080/api/lajmet/gjej/lajmet/titulli/"+data).then((response)=>{
      setLajmet(response.data)
      console.log(response.data)
   }).catch(error=>{
      console.log(error);
   })
   }
  return (
    <div>
      <HederiSekondar />
      <div className='container'>
      <div className="mt-5 d-flex justify-content-center" style={{boxShadow: "50px"}}><img src="https://scontent.fprn7-1.fna.fbcdn.net/v/t39.30808-6/305584979_2042769999253974_2923482145884582378_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=lrWUOgexpksAX_lsrPR&_nc_ht=scontent.fprn7-1.fna&oh=00_AfA_d9D3M9GgyTj9JNPmrnr7vQShYZ5bh32Umy9jmlCCfw&oe=6371E9C2" className="w-75 mr-5 mb-5 img-fluid rounded shadow"/></div>  
        <div className='d-flex justify-content-center mt-5 mr-5'>
          <div>
            
      <input type="search " id='kerko' onChange={getData}/>
      <button className='btn btn-primary' onClick={()=>merrLajmet()}><i class="bi bi-search"></i></button>
      </div>
      </div>
    <div class="serv">
    <div className='row'>
      {
        lajmet.map(
          lajmi=>
          <div className='col-md lajmi mt-5 text-center' id='card'>
            <Link to={'/lajmet/'+lajmi.id} target="_blank">
           <img src={lajmi.fotografia} className='h-75 w-75 img-fit '  />
           <h3 className='mt-4'>{lajmi.pershkrimi}</h3>
           <div className='d-flex justify-content-between text-dark' id='data-ora'>
           <p><i className='bi bi-alarm mr-2'></i>{format(lajmi.data, 'dd/MM/yyyy')}</p>
           <p><i class="bi bi-calendar-date-fill mr-2"></i>{lajmi.ora}</p>
           </div>
           <p></p>
           </Link>
            </div>
            
        )
      }
   
    </div>
  </div>
  </div>
  <Foteri />
  </div>
  )
}

export default GjithaLajmet