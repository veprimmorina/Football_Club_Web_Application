import React from 'react'
import LajmiService from '../services/LajmiService';
import  {useEffect, useState} from "react";
import LajmetId from './LajmetId';
import $ from 'jquery';
import { format } from 'date-fns'

function LajmetDash() {
   
 
    const [lajmet, setLajmet] = useState([])

    useEffect(()=>{
     LajmiService.merrLajmet().then((response)=>{
        setLajmet(response.data)
        console.log(response.data)
     }).catch(error=>{
        console.log(error);
     })
    }, [])
   function modifikoLajmin(lajmi){
    var titulli=document.getElementById("titulli");
    var pershkrimi=document.getElementById("pershkrimi");
   var titulliRi=document.getElementById("lajmi-titulli"+lajmi.id);
   var pershkrimiRi= document.getElementById("lajmi-pershkrimi"+lajmi.id);
   titulli.classList.add("d-none");
   pershkrimi.classList.add("d-none");
   titulliRi.classList.remove("d-none");
   pershkrimiRi.classList.remove("d-none");
   }  
   function shfaqRreshtin(){
    var rreshti=document.getElementById('shto-lajme');
    rreshti.classList.remove('d-none');

    $("#ruaj-lajmin").click(function(e){
    var fotoL=document.getElementById('lajmi-foto').value;
    var pershkrimiL=document.getElementById('lajmi-pershkrimi').value;
    var titulliL=document.getElementById('lajmi-titulli').value;
    var dataL=document.getElementById('lajmi-data').value;
    var oraL=document.getElementById('lajmi-ora').value;

    var Lajmi={
      fotografia: fotoL,
      pershkrimi: pershkrimiL,
      titulli: titulliL,
      data: dataL,
      ora: oraL
    }

    
    })
    
    

   
   }
  return (
    <div style={{overflow: 'auto'}}>
    <table class="table table-striped table-dark" id="tabela-superlig">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"></th>
      <th scope="col">Pershkrimi</th>
      <th scope="col">Titulli</th>
      <th scope="col">Data</th>
      <th scope="col">Ora</th>
      <th scope="col">Golaverazhi</th>
      <th scope="col"><button className='btn-small bg-success' onClick={()=> shfaqRreshtin()}>Shto Lajme</button></th>
    </tr>
  </thead>
  <tbody>
    {
      lajmet.map(
        lajmi=>
<tr>
      <th className="pozita-ekipit">{lajmi.id}</th>
      <td><img alt="Image placeholder" className="avatar rounded-circle img-fluid " src={lajmi.fotografia}/></td>
      <td><textarea>{lajmi.titulli}</textarea><input type="text" id={"lajmi-titulli"+lajmi.id} className='d-none'/></td>
    
      <td><p id="pershkrimi" className=''>{lajmi.pershkrimi}</p><input type="textarea" id={"lajmi-pershkrimi"+lajmi.id} className="d-none" /></td>
      <td>{format(lajmi.data, 'dd/MM/yyyy')}</td>
      <th>{lajmi.ora}</th>
      <td><i className='bi bi-pen' onClick={()=> modifikoLajmin(lajmi)}></i></td>
      <td><button className='btn btn-danger'>Fshij</button></td>
    </tr>
      )
    }
    <tr className="d-none" id='shto-lajme'>
     <td></td>
     <td><input type="text" placeholder='Fotografia Path' id='lajmi-foto' size='14'/></td>
     <td><textarea type="text" placeholder="Pershkrimi" id='lajmi-pershkrimi' size='8'></textarea></td>
     <td><input type="text" placeholder="Titulli" id='lajmi-titulli' size='20'/></td>
     <td></td>
     <td></td>
     <td></td>
     <td><button className='btn btn-success' id='ruaj-lajmin'>Ruaj</button></td>
    </tr>
  </tbody>
</table>
</div>
  )
}

export default LajmetDash