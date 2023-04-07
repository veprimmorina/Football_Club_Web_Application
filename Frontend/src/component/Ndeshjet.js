import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import LajmiService from '../services/LajmiService';
import { format } from 'date-fns';

function Ndeshjet() {
    const [ndeshjet, setNdeshjet] = useState([])
    const [shtoLajmet, setShtoLajmet]=useState(false);
    const [sponzor, setSponzor]=useState({emri:'', fotografia: ''})
    useEffect(()=>{
     LajmiService.gjejNdeshjet().then((response)=>{
        setNdeshjet(response.data)
        console.log(response.data)
     }).catch(error=>{
        console.log(error);
     })
     
    }, [])


    function deleteId(id){
      fetch("http://localhost:8080/api/stadiumi/fshij/sponzorin/"+id
      ).then((result)=>{
           result.json().then((resp)=>{
            alert("Fshirja u realizua me sukses")
             LajmiService.gjejSponzoret().then((response)=>{
              setNdeshjet(response.data)
             })
           })
      })
    }
  return (
    <div style={{overflow: 'auto'}}>
    <table class="table table-striped table-dark" id="tabela-superlig">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Ekipi Vendas</th>
      <th scope="col">Ekipi Mysafir</th>
     <th>Data</th>
     <th>Ora</th>
     <th>Kategoria</th>
     <th>Gjiroja numer</th>
     <th>Statusi</th>
     <th></th>
     <th></th>
     <th></th>
     <th scope="col"><button className='btn btn-primary' onClick={()=> setShtoLajmet(!shtoLajmet)}>Shto</button></th>
    
    </tr>
  </thead>
  <tbody>
    {
      ndeshjet.map(
        ndeshja=>
<tr>
      <th>{ndeshja.id}</th>
      <td>{ndeshja.ekipiVendas}</td>
      <td>{ndeshja.ekipiMysafir}</td>
      <td>{format(ndeshja.dataENdeshjes, 'dd/MM/yyyy')}</td>
      <td>{ndeshja.oraENdeshjes}</td>
      <td>{ndeshja.kategoria}</td>
      <td>{ndeshja.xhirojaNumer}</td>
      <td>{ndeshja.statusi}</td>
      <td><img src={ndeshja.fotografiaVendas} height="50px" width="50px"/></td>
      <td><img src={ndeshja.fotografiaMusafir} height="50px" width="50px"/></td>
      <td><a><i className='bi bi-pen'></i></a></td>
      <td><i class="bi bi-trash3-fill" onClick={()=> deleteId(ndeshja.id)}></i></td>
    </tr>
      )
    }
    {
      shtoLajmet && 
      <tr>
        <td>#</td>
        <td><input type="text" value={sponzor.emri} onChange={e=> setSponzor({emri: e.target.value})} size="5"/></td>
        <td><input id="fil" type="text" size="5"/></td>
        <td><input id="fil" type="text" size="5"/></td>
        <td><input id="fil" type="text" size="5"/></td>
        <td><input id="fil" type="text" size="8"/></td>
        <td><input id="fil" type="text" size="3"/></td>
        <td><input id="fil" type="text" size="3"/></td>
        <td><input id="fil" type="text" size="3"/></td>
        <td><input id="fil" type="text" size="3"/></td>
        <td></td>
        <td><button type='' className='btn btn-success'>Shto</button></td>
        </tr>
    }
  </tbody>
</table>

</div>
  )
}

export default Ndeshjet