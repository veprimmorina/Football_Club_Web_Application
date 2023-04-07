import React, {useEffect, useState} from "react";
import LajmiService from '../services/LajmiService'
import LajmetCard from "./LajmetCard";
import './LajmetIdStyle.css';

import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import HederiSekondar from "./HederiSekondar";
import Foteri from "./Foteri";
import axios from "axios";

function LajmetId(lajmiId) {

  const {id} = useParams();
  const [lajmi, setLajmi]=useState({});

  useEffect(()=>{
    axios.get("http://localhost:8080/api/lajmet/gjej/lajmin/"+id)
    .then(response=>{setLajmi(response.data)}
  )});
  return (
    <div>
      <HederiSekondar />
    <div className="container bg-light text-dark " >
      <div className="row text-center">
      <div className="mt-5" style={{boxShadow: "50px"}}><img src="https://scontent.fprn7-1.fna.fbcdn.net/v/t39.30808-6/305584979_2042769999253974_2923482145884582378_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=lrWUOgexpksAX_lsrPR&_nc_ht=scontent.fprn7-1.fna&oh=00_AfA_d9D3M9GgyTj9JNPmrnr7vQShYZ5bh32Umy9jmlCCfw&oe=6371E9C2" className="w-75 mr-5 mb-5 img-fluid rounded shadow"/></div>  
       
        <div className="w-25 d-none d-lg-table" style={{borderTop: "5px solid blue", borderRadius: "8px", borderRight: "1px solid blue"}}><img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Malisheva.png" className="w-25 mt-5"/>
        <h4>{"Kf Malisheva"}</h4>
        <p>Official Website</p>
        <p>17/08/2022 17:00</p>
        <a></a>
        </div>
        
        <div className="w-75 " style={{}}>
        <Card style={{ width: '' }}>
      <Card.Body className="text-start">
        <Card.Title className="text-center"><h1>{lajmi.pershkrimi}</h1></Card.Title>
       <Card.Img className="mt-5"src={lajmi.fotografia}/>
       
        <Card.Text className="mt-5">
          
          <b>{lajmi.titulli}</b>
          </Card.Text>
       
      </Card.Body>
    </Card>
        </div>
        

      </div>
    </div>
    <Foteri />
    </div>
  )
}

export default LajmetId