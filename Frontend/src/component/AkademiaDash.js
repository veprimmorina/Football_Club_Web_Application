import React, {useEffect, useState} from "react";
import LajmiService from "../services/LajmiService";
function AkademiaDash() {
    const [aplikimet, setAplikimet] = useState([])

    useEffect(()=>{
     LajmiService.gjejAplikimet().then((response)=>{
        setAplikimet(response.data)
        console.log(response.data)
     }).catch(error=>{
        console.log(error);
     })
     
    }, [])

    function filtro(){
      var dataPrej=document.getElementById('prej').value;
      var dataDeri=document.getElementById('deri').value;

      LajmiService.gjejAplikimetData(dataPrej, dataDeri).then((response)=>{
        setAplikimet(response.data)
        console.log(response.data)
      })

      
    }
    function kerko(){
      var patern=document.getElementById("kerko").value;
      LajmiService.gjejAplikuesit(patern).then((response)=>{
        setAplikimet(response.data)
        console.log(response.data)
      })
    }
    function regjistro(id){
    var aplikimiId=document.getElementById('aplikimi-id'+id).value;
    var aplikimiEmri=document.getElementById("e-"+id).innerHTML;
    var aplikimiMbiemri=document.getElementById('m-'+id).innerHTML;
          
    LajmiService.shtoEmailin(id,aplikimiEmri+"."+aplikimiMbiemri+"-"+id,aplikimiEmri+aplikimiMbiemri);
      alert("U regjistrua me sukses")
    LajmiService.gjejAplikimet().then((response)=>{
      setAplikimet(response.data)
      console.log(response.data)
   })
  }
    
    return (
        <div style={{overflow: 'auto'}}>
        <table class="table table-striped table-dark" id="tabela-superlig">
      <thead>
     <tr>
      <th>Filtro sipas dates</th>
     <th>Prej:</th>
     <th><input type="text" id="prej" placeholder="Formati: vv-mm-dd" /></th>
     <th>Deri:</th>
     <th><input type="text" id="deri" placeholder="Formati: vv-mm-dd"/></th>
     <th><button className="btn-small btn-primary" onClick={()=>filtro()}>Gjej</button></th>
     <th><input type="text" placeholder="Kerko" id="kerko" style={{height: "20px", width: "60px"}}/><button className="btn-small" onClick={()=> kerko()}><i class="bi bi-search"></i></button></th>
     <th></th>
     </tr>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Emri</th>
          <th scope="col">Mbiemri</th>
          <th>Mosha</th>
          <th>Pozita</th>
          <th>Grupmosha</th>
          <th>Data aplikimit</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          aplikimet.map(
            aplikimi=>
    <tr>
          <th><p id={"aplikimi-id"+aplikimi.id}>{aplikimi.id}</p></th>
          <td><p id={"e-"+aplikimi.id}>{aplikimi.emri}</p></td>
          <td><p id={"m-"+aplikimi.id}>{aplikimi.mbiemri}</p></td>
          <td>{aplikimi.mosha+" Vjeç"}</td>
          <td>{aplikimi.pozita}</td>
          <td>{aplikimi.mosha==10||aplikimi.mosha==11? "U11 Parafatos" : (aplikimi.mosha==12||aplikimi.mosha==13 ? "U13 Fatos" : (aplikimi.mosha==14||aplikimi.mosha==15 ? "U15 Pioner" : "U18"))}</td>
          <td>{aplikimi.dataAplikimit}</td>
          <td>{aplikimi.iRegjistruar==0 ? <button className="btn btn-primary" onClick={()=> regjistro(aplikimi.id)}>Regjistro</button> : "I Regjistruar"} </td>
         
        </tr>
          )
        }
      </tbody>
    </table>
   
    </div>
  )
}

export default AkademiaDash