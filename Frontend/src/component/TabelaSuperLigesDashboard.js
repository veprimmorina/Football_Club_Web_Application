import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LajmiService from '../services/LajmiService';
import './NdeshjaEFundit.css'
function TabelaSuperLigesDashboard() {
  const [ekipet, setEkipet] = useState([])

    useEffect(()=>{
     LajmiService.gjejTabelen().then((response)=>{
        setEkipet(response.data)
        console.log(response.data)
     }).catch(error=>{
        console.log(error);
     })
    }, [])
  function shtoPiket(ekipi){
    LajmiService.shtoFitoren(ekipi.id);
    alert("+ fitore")
    LajmiService.gjejTabelen().then((response)=>{
      setEkipet(response.data)
    })
    
  }
  function barazim(ekipi){
    LajmiService.shtoBarazimin(ekipi.id)
    alert("+ barazim")
    LajmiService.gjejTabelen().then((response)=>{
      setEkipet(response.data)
    })
  }
  function heqPiket(ekipi){
    LajmiService.shtoHumbejn(ekipi.id)
    alert(ekipi.piket);
    alert("+ humbje")
    LajmiService.gjejTabelen().then((response)=>{
      setEkipet(response.data)
    })
  }
  function shtoGolat(ekipi){
    LajmiService.shtoGolat(ekipi.id);
    alert("+ gola")
    LajmiService.gjejTabelen().then((response)=>{
      setEkipet(response.data)
    })
  }
  function shtoGolatPesuar(ekipi){
    LajmiService.shtoGolatPesuar(ekipi.id);
    alert("+ gola")
    LajmiService.gjejTabelen().then((response)=>{
      setEkipet(response.data)
    })
  }
  return (
    
    <table class="table table-striped table-dark" id="tabela-superlig">
  <thead>
    <tr>
      <th scope="col">Pozita</th>
      <th scope="col"></th>
      <th scope="col">Emri</th>
      <th scope="col">Ndeshje</th>
      <th scope="col">Gola te shenuar</th>
      <th scope="col">Gola te pesuar</th>
      <th scope="col">Golaverazhi</th>
      <th scope="col">Pikët</th>
      <th>Fitore</th>
      <th>Barazim</th>
      <th>Humbje</th>
    </tr>
  </thead>
  <tbody>
    {
      ekipet.map(
        ekipi=>
<tr>
      <th className={ekipi.pozita==1 ? "bg-success": "primary"  }>{ekipi.pozita}</th>
      <td><img alt="Image placeholder" className="avatar rounded-circle img-fluid " src={ekipi.fotografia}/></td>
      <td><b> {ekipi.emri} </b></td>
      <td>{ekipi.ndeshje}</td>
      <td><button className="btn">-</button>{ekipi.golatEShenuar}<button className="btn" onClick={()=> shtoGolat(ekipi)}>+</button></td>
      <th>{ekipi.golatEPesuar}<button className="btn" onClick={()=> shtoGolatPesuar(ekipi)}>+</button></th>
      <td>{ekipi.golatEShenuar-ekipi.golatEPesuar}</td>
      <td className="ekipi-piket">{ekipi.piket}</td> 
      <td><button onClick={()=> shtoPiket(ekipi)} className="btn btn-success btn-small">+Fitore</button></td> 
      <td><button onClick={()=> barazim(ekipi)} className="btn btn-warning btn-small">+Barazim</button></td> 
      <td><button onClick={()=> heqPiket(ekipi)} className="btn btn-danger btn-small">+Humbje</button></td> 
    </tr>
      )
    }
    
    
  </tbody>
</table>
  )
}

export default TabelaSuperLigesDashboard