import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LajmiService from '../services/LajmiService';

function UlsjaDash() {
    const [ulset, setUlsja] = useState([])

    useEffect(()=>{
     LajmiService.getLajmet().then((response)=>{
        setUlsja(response.data)
        console.log(response.data)
     }).catch(error=>{
        console.log(error);
     })
     
    }, [])
   function perditesoUleset(){
    LajmiService.perditesoUleset();
   } 
    return (
        <div style={{overflow: 'auto'}}>
        <table class="table table-striped table-dark" id="tabela-superlig">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Cmimi</th>
          <th scope="col">E Lire</th>
         
        </tr>
      </thead>
      <tbody>
        {
          ulset.map(
            ulsja=>
    <tr>
          <th>{ulsja.id}</th>
          <td>{ulsja.cmimi+" € "}</td>
          <td><b> {ulsja.eLire ? "E Lire" : "E Rezervuar"} </b></td>
          
        </tr>
          )
        }
      </tbody>
    </table>
    <button type="submit" className="btn btn-success" onClick={()=> perditesoUleset()}>C'rezervo te gjitha</button>
    </div>
  )
}

export default UlsjaDash