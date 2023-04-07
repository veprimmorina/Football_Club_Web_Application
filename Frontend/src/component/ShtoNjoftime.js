import React, {useEffect, useState} from "react";
import LajmiService from '../services/LajmiService'
import { Axios } from "axios";

function ShtoNjoftime() {
  
    
    const [adminat, setAdminat] = useState([])

    useEffect(()=>{
     LajmiService.gjejAdministratoret().then((response)=>{
        setAdminat(response.data)
        console.log(response.data)
     }).catch(error=>{
        console.log(error);
     })
    }, [])
  

   function ruajNjoftimin(){
    var pershkrimiN=document.getElementById('njoftimi').value;
    var trajneriN=document.getElementById('trajneri-select')
    var trajneriValu=trajneriN.options[trajneriN.selectedIndex].value;
    var teksti=document.getElementById('tekstiS');
    var Njoftimet={
        pershkrimi: pershkrimiN,
        trajneri: trajneriValu
    };

    LajmiService.shtoNjoftime(Njoftimet);
    teksti.innerHTML="Njoftimi u shtua me sukses!";

   }  
    return (
        
    <div class="container-fluid">
    <div class="row justify-content-center">
        <div class=" col-lg-6 col-md-8">
            <div class="card p-3">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <h2 class="heading text-center">Malisheva Akademi</h2>
                    </div>
                </div>

                <form onSubmit="" class="form-card">
                    <div class="row justify-content-center mb-4 radio-group">
                    </div>
                    <div  id='second'>
                    <div class="row justify-content-center form-group">
                        <div class="col-12 px-auto">
                            <div class="custom-control custom-radio custom-control-inline">  <label for="customRadioInline1" class="custom-control-label label-radio">Shto njoftimin</label> </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-12">
                            <div class="input-group"><textarea  id="njoftimi" rows="8" cols="50" ></textarea> </div>
                            <select id="trajneri-select"className="text-center mb-3"style={{width:"100%"}}>
                                {
                                 <> 
                                        <option id={"trajneri"} value="Veprim Morina">{"Veprim Morina"}</option>
                                        <option id={"trajneri"} value="Kushtrim Morina">{"Kushtrim Morina"}</option>
                                        </>  
                                        
                                }
                            </select>
                        </div>
                    </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-12">
                            <button className='btn btn-primary' type="submit" style={{width: "100%"}} onClick={()=> ruajNjoftimin()}>Shto</button>
                          <p className="text-success d-none" id="teksti-s" ></p>
                         </div>
                    </div>
                    
                </form>
              
            </div>
        </div>
    </div>
</div>

  )
}

export default ShtoNjoftime