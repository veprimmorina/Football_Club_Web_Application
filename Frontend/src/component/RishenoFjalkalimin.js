import axios from 'axios';
import React from 'react'
import Foteri from './Foteri'
import HederiAkademis from './HederiAkademis'

function RishenoFjalkalimin() {

    const [showReset, setShowReset]=useState(false);

    function login(){
    
        var emriPe=document.getElementById("emP").value;
        var fjalka=document.getElementById("fja").value;

        axios.get("http://localhost:8080/api/aplikimet/login/"+emriPe+"/"+fjalka)
      .then(response=>{setThis(response.data)});

      function setThis(logi){
        if(logi!=""){
            alert(logi.fjalkalimi)
           // window.location.href="http://localhost:3000/orari";

             
        }else{
            alert("gabim")
        }
      }
    }
  return(
    <div>
        <HederiAkademis />
    <div class="container-fluid">
    <div class="row justify-content-center">
        <div class=" col-lg-6 col-md-8">
            <div class="card p-3">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <h2 class="heading text-center">Malisheva Akademi</h2>
                    </div>
                </div>
                <form onsubmit="event.preventDefault()" class="form-card">
                    <div class="row justify-content-center mb-4 radio-group">
                        <div class="col-sm-3 col-5">
                            <div class='radio selected mx-auto' data-value="dk"> <img class="fit-image" src="https://scontent.fprn7-1.fna.fbcdn.net/v/t39.30808-6/305018352_2039707826226858_6780150966098934980_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=IW4G-iEZbTYAX_6SrsP&tn=N4WyhM_pxd-Clz8x&_nc_ht=scontent.fprn7-1.fna&oh=00_AT_hIOJcM4xdUnz0Bke8Wflzd3qeH8Rx4zFVF5LXzDxKgQ&oe=63384B53" width="105px" height="55px"/> </div>
                        </div>
                        <div class="col-sm-3 col-5">
                            <div class='radio mx-auto' data-value="visa"> <img class="fit-image" src="https://scontent.fprn3-1.fna.fbcdn.net/v/t1.6435-9/135793539_4332023130159214_5097353150250002126_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=appSnitQY1MAX-Bg_JB&_nc_ht=scontent.fprn3-1.fna&oh=00_AT-ncdgrhoLWAlSU_ZoQUFTekbA31GJrizmw8iTxTEZy4g&oe=6340157F" width="105px" height="55px"/> </div>
                        </div>
                        
                        <div class="col-sm-3 col-5">
                            <div class='radio mx-auto' data-value="master"> <img class="fit-image" src="https://scontent.fprn7-1.fna.fbcdn.net/v/t39.30808-6/302161100_2035516686645972_6932110223969249365_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=BK6XoWYfjqwAX95QBHC&_nc_ht=scontent.fprn7-1.fna&oh=00_AT-bKUWuVNir2VSpf8XNcKHqLd3LHFPHXBp8so4Me1LbwA&oe=6337DCEC" width="105px" height="55px"/> </div>
                        </div>
                        <div class="col-sm-3 col-5">
                            <div class='radio mx-auto' data-value="paypal"> <img class="fit-image" src="https://scontent.fprn3-1.fna.fbcdn.net/v/t1.6435-9/50650257_1232795206870492_1845515677218111488_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=OkWRnyeQ2fgAX8WUMn6&_nc_ht=scontent.fprn3-1.fna&oh=00_AT8Pvhr-oLmBv_JOz4L25BGMFLoOoYvxIeHWkSqO4Hkrvg&oe=63419322" width="105px" height="55px"/> </div>
                        </div> 
                    </div>
                    <div className='text-primary ' id='first-slide'>
                    <div class="row justify-content-center form-group text-center">
                        <div class="col-12 px-auto">
                            <div class="custom-control custom-radio custom-control-inline">  <label for="customRadioInline1" class="custom-control-label label-radio">Kyçu</label> </div>
                        </div>
                    </div>
    
                    <div class="row justify-content-center text-center">
                        <div class="col-12">
                            <div class="input-group"> <input type="password" id="fja" name="card-no" placeholder=""/> <label>Risheno Fjalkalimi</label> </div>
                        </div>
                    </div>
                    </div>
                    <div className='d-none' id='second'>
                    <div class="row justify-content-center form-group">
                        <div class="col-12 px-auto">
                            <div class="custom-control custom-radio custom-control-inline">  <label for="customRadioInline1" class="custom-control-label label-radio">Sheno kodin e derguar ne e-mailin tuaj</label> </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-12">
                            <div class="input-group"> <input type="text" name="Name" id="kodi" placeholder=""/> <label>Kodi</label> </div>
                        </div>
                    </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-12"><a className='text-primary mr-4 d-none' id='prapa' >Kthehu prapa</a><a id='vazhdo' className='text-white btn btn-primary' style={{width:"100%"}} onClick={()=>login()}>Kyçu</a> <input class="btn btn-pay placeicon d-none" id="a"   value="Apliko" /> 
                        <p className='text-success' id='sukses-text'></p>
                        <button className='btn btn-dark d-none' id='shkarko-buton'><i className="bi bi-download mr-2"></i><a id='shkarko'>Shkarko Aplikimin</a></button>
                         </div>
                    </div>
                    
                </form>
              
            </div>
        </div>
    </div>
</div>
<Foteri />
</div>
  )
}

export default RishenoFjalkalimin