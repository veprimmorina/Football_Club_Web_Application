import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LajmiService from '../services/LajmiService';
import './NdeshjaEFundit.css'
import $ from 'jquery';


function TabelaLojtareveDash() {    

  const [futbollistet, setFutbollistet] = useState([])

    useEffect(()=>{
     LajmiService.getFutbollistet().then((response)=>{
        setFutbollistet(response.data)
        console.log(response.data)
     }).catch(error=>{
        console.log(error);
     })
    }, [])

    function modifikoFutbollistin(futbollisti){
      var emriVjeter=document.getElementById('emri-futbollistit'+futbollisti.id);
      var mbiemriVjeter=document.getElementById('mbiemri-futbollistit'+futbollisti.id);
      var numriVjeter=document.getElementById('numri-futbollistit'+futbollisti.id);
      var pozitaVjeter=document.getElementById('pozita-futbollistit'+futbollisti.id);
      var golatVjeter=document.getElementById('golat-futbollistit'+futbollisti.id);
      var asistimetVjeter=document.getElementById('asistimet-futbollistit'+futbollisti.id);
      var emri='e'+futbollisti.id;
      var emriRi=document.getElementById(emri);
      var mbiemri='m'+futbollisti.id;
      var mbiemriRi=document.getElementById(mbiemri);
      var numri='n'+futbollisti.id;
      var numriRi=document.getElementById(numri);
      var pozita='p'+futbollisti.id;
      var pozitaRe=document.getElementById(pozita);
      var golat='g'+futbollisti.id;
      var golatRe=document.getElementById(golat);
      var asistimet='a'+futbollisti.id;
      var asistimetRe=document.getElementById(asistimet);
      var ruaj=document.getElementById('modifiko'+futbollisti.id);
       emriVjeter.classList.add('d-none');
       emriRi.classList.remove('d-none');
       mbiemriVjeter.classList.add('d-none');
       mbiemriRi.classList.remove('d-none');
       numriVjeter.classList.add('d-none');
       numriRi.classList.remove('d-none');
       pozitaVjeter.classList.add('d-none');
       pozitaRe.classList.remove('d-none');
       golatVjeter.classList.add('d-none');
       golatRe.classList.remove('d-none');
       asistimetVjeter.classList.add('d-none');
       asistimetRe.classList.remove('d-none');
       ruaj.classList.remove('d-none');
      $("#modifiko"+futbollisti.id).click(function(e){
        ruajModifikimin(futbollisti.id,emriRi.value);
        LajmiService.getFutbollistet().then((response)=>{
          setFutbollistet(response.data)
          console.log(response.data)
       })
      });
      
      }
   
   function ruajModifikimin(id,emri){ 
     LajmiService.ruajModifikimin(id,emri);
   }
   function shtoFutbollistin(){
     
       var shtimi=document.getElementById("k");
  shtimi.classList.remove("d-none");
       $("#ruaj-futbollistin").click(function(e){
        var photoPath=document.getElementById("path").value;
       var emri=document.getElementById("emri-futbollistit").value;
       var mbiemriF=document.getElementById("mbi-emri").value;
       var numri=document.getElementById("numri").value;
       var mosha=document.getElementById("mosha").value;
       var pozita=document.getElementById("pozita").value;
       var golat=document.getElementById("golat").value;
       var asistimet=document.getElementById("asistimet").value;
       var shtetesia=document.getElementById("shtetesia-path").value;

       var futbollisti={
        figura: photoPath,
        emri:emri,
        mbiemri: mbiemriF,
        mosha: mosha,
        numri: numri,
        pozita: pozita,
        golat: golat,
        asistimet: asistimet,
        shtetesia: shtetesia
       }
       LajmiService.shtoFutbollist(futbollisti)
       var mesazhi=document.getElementById("mesazh-sukses");
       mesazhi.innerHTML="Futbollisti "+futbollisti.emri+" "+futbollisti.mbiemri+" u ruajt me sukses!"
       })
   }
   function fshijFutbollistin(futbollisti){
    LajmiService.fshijFutbollistin(futbollisti.id);
    var mesazhi=document.getElementById("mesazh-sukses");
    mesazhi.innerHTML="Futbollisti "+futbollisti.emri+" "+futbollisti.mbiemri+" u fshi me sukses!"
   }
  return (
    <table class="table table-striped table-dark" id="tabela-superlig" style={{overFlow: "auto"}}>
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Fotografia</th>
      <th scope="col">Emri</th>
      <th scope="col">Mbiemri</th>
      <th scope="col">Numri</th>
      <th scope="col">Pozita</th>
      <th scope="col">Gola</th>
      <th scope="col">Asistime te shenuar</th>
      <th scope="col">Shtetesia</th>
      <th scope="col">Modifiko</th>
      <th><button className="btn-small bg-success" id="shto-inicim" onClick={()=> shtoFutbollistin()}>Shto futbollistin</button></th>   
    </tr>
  </thead>
  <tbody>
  {
      futbollistet.map(
        futbollisti=>
<tr>
      <th>{futbollisti.id}</th>
      <td><img alt="Image placeholder" className="avatar rounded-circle img-fluid " src={futbollisti.figura}/></td>
      <td><b className="" id={"emri-futbollistit"+futbollisti.id}> {futbollisti.emri} </b><input type="text" id={"e"+futbollisti.id} className="d-none" placeholder={futbollisti.emri} size="11"/></td>
      <td><b className="" id={"mbiemri-futbollistit"+futbollisti.id}> {futbollisti.mbiemri} </b><input type="text" id={"m"+futbollisti.id} className="d-none" placeholder={futbollisti.mbiemri} size="10"/></td>
      <td><b className="" id={"numri-futbollistit"+futbollisti.id}> {futbollisti.numri} </b><input type="text" id={"n"+futbollisti.id} className="d-none" placeholder={futbollisti.numri} size='2'/></td>
      <th><b className="" id={"pozita-futbollistit"+futbollisti.id}> {futbollisti.pozita} </b><input type="text" id={"p"+futbollisti.id} className="d-none" placeholder={futbollisti.pozita} size="10"/></th>
      <td><b className="" id={"golat-futbollistit"+futbollisti.id}> {futbollisti.golat} </b><input type="text" id={"g"+futbollisti.id} className="d-none" placeholder={futbollisti.golat} size='2' /></td>
      <td><b className="" id={"asistimet-futbollistit"+futbollisti.id}> {futbollisti.asistimet} </b><input type="text" id={"a"+futbollisti.id} className="d-none" placeholder={futbollisti.asistimet} size='2' /></td> 
      <td><img src={futbollisti.shtetesia} className="avatar "/></td> 
      <td><button className="btn btn-success btn-small d-none" id={"modifiko"+futbollisti.id} onClick={()=>ruajModifikimin()}>Modifiko</button><i className="bi bi-pen" onClick={()=> modifikoFutbollistin(futbollisti)}></i></td> 
     <td><button className="btn btn-danger btn-small" onClick={()=> fshijFutbollistin(futbollisti)}>Fshij</button></td>
    </tr>
    
      )
      
    }
     <tr className="d-none bg-sucess" id="k">
      <th></th>
      <th><input type="text" placeholder="Photo Path" id="path" size="8"/></th>
      <td><input type="text" placeholder="Emri" id="emri-futbollistit" size="8"/></td>
      <td><input type="text" placeholder="Mbiemri" id="mbi-emri" size="8"/></td>
      <td><input type="text" placeholder="Numri" id="mosha" size="4" /></td>
      <td><input type="text" placeholder="Mosha" id="numri" size="4"/></td>
      <td><input type="text" placeholder="Pozita" id="pozita" size="4"/></td>
      <td><input type="text" placeholder="Golat" id="golat" size="4"/></td>
      <td><input type="text" placeholder="Asiste" id="asistimet" size="4"/></td>
      <td><input type="text" placeholder="Shtetesia" id="shtetesia-path" size="6"/></td>
      <td><button className="btn bg-success" id="ruaj-futbollistin">Ruaj</button></td>
      </tr>
    
  </tbody>
  <div className="text-center">
  <p id="mesazh-sukses" className="text-center"></p>
  </div>
</table>

  )
}

export default TabelaLojtareveDash