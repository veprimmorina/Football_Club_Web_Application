import React, {useEffect, useState} from "react";
import LajmiService from '../services/LajmiService'
import "bootstrap-icons/font/bootstrap-icons.css";
import './NdeshjaEFunditStadium.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function NdeshjaEFunditStadium() {
   
   const[sponzoret,setSponzoret]=useState([])

   useEffect(()=>{
    LajmiService.gjejNdeshjenEFundit().then((response)=>{
      setSponzoret(response.data)
       console.log(response.data)
    }).catch(error=>{
       console.log(error);
    })
   }, [])

   return (
   
      <div className='mt-5 pt-5 text-light' id='ndeshja-fundit-stadium' >
         <div className="row">
            <div className="col-sm mt-3">
   <h3 className="text-dark">Rezervo Bileten per ndeshjen: </h3>
   </div>
   <div className="col-sm " style={{paddingLeft: "60px", paddingTop: "20px", paddingBottom: "20px"}}>
      <table className="mt-2"><tr><h1 className="text-dark"><img src='https://upload.wikimedia.org/wikipedia/en/thumb/6/61/FC_Malisheva.svg/1200px-FC_Malisheva.svg.png' className="ekipi-vendas"/></h1><td><b className="h3">vs</b></td><td><h1><img className="ekipi-musafir" src="https://upload.wikimedia.org/wikipedia/en/thumb/6/64/KF_Drita.svg/1200px-KF_Drita.svg.png" /></h1></td></tr>
      <tr><td className="w-25"><b className="h3">Fc Malisheva</b></td><td></td><td className="w-25"><b className="h3">Fc Drita</b></td></tr></table>
  
   </div>
   
        
         <div className="col-sm">
       <h3 href="" className="mr-5 text-dark">Shkarkon manualin per rezervim: <h1 className="d-inline"><a href="http://localhost:8080/api/pdf/createPdf"><i class="bi bi-filetype-pdf" id="manuali"></i></a></h1>
</h3>
       </div> 
       </div>
    </div>
 )
}
export default NdeshjaEFunditStadium