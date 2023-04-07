import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import LajmiService from '../services/LajmiService'

function SponzoretDash() {
    const [sponzoret, setSponzoret] = useState([])
    const [shtoLajmet, setShtoLajmet]=useState(false);
    const [sponzor, setSponzor]=useState({emri:'', fotografia: ''})
    useEffect(()=>{
     LajmiService.gjejSponzoret().then((response)=>{
        setSponzoret(response.data)
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
              setSponzoret(response.data)
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
      <th scope="col">Emri</th>
      <th scope="col">Fotografia</th>
     <th></th>
     <th scope="col"><button className='btn btn-primary' onClick={()=> setShtoLajmet(!shtoLajmet)}>Shto</button></th>
    
    </tr>
  </thead>
  <tbody>
    {
      sponzoret.map(
        sponzori=>
<tr>
      <th>{sponzori.id}</th>
      <td>{sponzori.emri}</td>
      <td><img src={sponzori.fotografia} width="50px" height="20px" /></td>
      <td><a><i className='bi bi-pen'></i></a></td>
      <td><i class="bi bi-trash3-fill" onClick={()=> deleteId(sponzori.id)}></i></td>
    </tr>
      )
    }
    {
      shtoLajmet && 
      <tr>
        <td>#</td>
        <td><input type="text" value={sponzor.emri} onChange={e=> setSponzor({emri: e.target.value})}/></td>
        <td><input id="fil" type="text"/></td>
        <td></td>
        <td><button type='' className='btn btn-success'>Shto</button></td>
        </tr>
    }
  </tbody>
</table>

</div>
  )
}

export default SponzoretDash