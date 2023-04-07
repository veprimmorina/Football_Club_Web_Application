import React from 'react'

function Foteri() {
  return (
    <footer class="p-5 bg-dark text-white text-center position-relative">
      <div class="container"> 
        <div className='mb-5'>
          <p className='d-inline lead'>Na ndiqni në: </p>
          <a href='https://www.facebook.com/malishevafc' target="_blank"> <i className='bi bi-facebook mx-3 h1'></i></a>
          <a href='https://www.instagram.com/fc.malisheva/' target="_blank"><i className='bi bi-instagram mx-3 h1'></i></a>
          <a href=''><i className='bi bi-youtube mx-3 h1'></i></a>
        </div>
        <div>
        <p class="lead">Copyright &copy; FC Malisheva 2022, Developed by:  Veprim Morina</p>

        <a href="#" class="position-absolute bottom-0 end-0 p-5">
          <i class="bi bi-arrow-up-circle h1"></i>
        </a>
        </div>
      </div>
    </footer>
  )
}

export default Foteri