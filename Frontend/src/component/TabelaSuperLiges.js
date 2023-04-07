import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LajmiService from '../services/LajmiService';
import './NdeshjaEFundit.css'
import { WindowSidebar } from "react-bootstrap-icons";
function TabelaSuperLiges() {

  let [count,setCount]=useState(1);
  
  
 
  const [ekipet, setEkipet] = useState([])

    useEffect(()=>{
     LajmiService.gjejTabelen().then((response)=>{
        setEkipet(response.data)
        console.log(response.data)
     }).catch(error=>{
        console.log(error);
     })
    }, [])
  
  return (
    <div style={{overflow: 'auto'}}>
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
    </tr>
  </thead>
  <tbody>
    {
      ekipet.map(
        ekipi=>
<tr>
      <th className="pozita-ekipit">{count++}</th>
      <td><img alt="Image placeholder" className="avatar rounded-circle img-fluid " src={ekipi.fotografia}/></td>
      <td><b> {ekipi.emri} </b></td>
      <td>{ekipi.ndeshje}</td>
      <td>{ekipi.golatEShenuar}</td>
      <th>{ekipi.golatEPesuar}</th>
      <td>{ekipi.golatEShenuar-ekipi.golatEPesuar}</td>
      <td className="ekipi-piket">{ekipi.piket}</td> 
    </tr>
      )
    }
  </tbody>
</table>
</div>
  )
}

export default TabelaSuperLiges