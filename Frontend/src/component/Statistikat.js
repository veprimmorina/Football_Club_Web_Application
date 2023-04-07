
import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LajmiService from '../services/LajmiService';
import './statistikat.css'



function Statistikat() {


    const [futbollistet, setLajmi] = useState([])

    useEffect(()=>{
     LajmiService.getFutbollistet().then((response)=>{
        setLajmi(response.data)
        console.log(response.data)
     }).catch(error=>{
        console.log(error);
     })
    }, [])
  return (
    <section id="questions" class="p-5">
    <div class="container">
      <h2 class="text-center mb-4">Statistikat e lojtarëve</h2>
      <div class="accordion accordion-flush" id="questions">
      
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#question-one"
            >
              Me se shumti gola
            </button>
          </h2>
          <div
            id="question-one"
            class="accordion-collapse collapse"
            data-bs-parent="#questions"
          >
            <div class="accordion-body">
            {
                futbollistet.map(
                    futbollisti=>
                    <p>{futbollisti.emri}</p>
                )
              }
            </div>
          </div>
        </div>
       
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#question-two"
            >
              Më së shumti asiste
            </button>
          </h2>
          <div
            id="question-two"
            class="accordion-collapse collapse"
            data-bs-parent="#questions"
          >
            <div class="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              beatae fuga animi distinctio perspiciatis adipisci velit maiores
              totam tempora accusamus modi explicabo accusantium consequatur,
              praesentium rem quisquam molestias at quos vero. Officiis ad
              velit doloremque at. Dignissimos praesentium necessitatibus
              natus corrupti cum consequatur aliquam! Minima molestias iure
              quam distinctio velit.
            </div>
          </div>
        </div>
       
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#question-three"
            >
              Portat e paprekura
            </button>
          </h2>
          <div
            id="question-three"
            class="accordion-collapse collapse"
            data-bs-parent="#questions"
          >
            <div class="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              beatae fuga animi distinctio perspiciatis adipisci velit maiores
              totam tempora accusamus modi explicabo accusantium consequatur,
              praesentium rem quisquam molestias at quos vero. Officiis ad
              velit doloremque at. Dignissimos praesentium necessitatibus
              natus corrupti cum consequatur aliquam! Minima molestias iure
              quam distinctio velit.
            </div>
          </div>
        </div>
        
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#question-four"
            >
              How Do I sign up?
            </button>
          </h2>
          <div
            id="question-four"
            class="accordion-collapse collapse"
            data-bs-parent="#questions"
          >
            <div class="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              beatae fuga animi distinctio perspiciatis adipisci velit maiores
              totam tempora accusamus modi explicabo accusantium consequatur,
              praesentium rem quisquam molestias at quos vero. Officiis ad
              velit doloremque at. Dignissimos praesentium necessitatibus
              natus corrupti cum consequatur aliquam! Minima molestias iure
              quam distinctio velit.
            </div>
          </div>
        </div>
    
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#question-five"
            >
              Do you help me find a job?
            </button>
          </h2>
          <div
            id="question-five"
            class="accordion-collapse collapse"
            data-bs-parent="#questions"
          >
            <div class="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              beatae fuga animi distinctio perspiciatis adipisci velit maiores
              totam tempora accusamus modi explicabo accusantium consequatur,
              praesentium rem quisquam molestias at quos vero. Officiis ad
              velit doloremque at. Dignissimos praesentium necessitatibus
              natus corrupti cum consequatur aliquam! Minima molestias iure
              quam distinctio velit.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Statistikat