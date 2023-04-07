import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './SlideriStyle.css'

function Slideri() {
  return (
    <Carousel variant="dark" className='mr-5 row d-none d-lg-flex'>
      <Carousel.Item className='fotografia-slider'>
        <img
          className="img-fluid" id="syreti"
          src="https://scontent.fprn7-1.fna.fbcdn.net/v/t39.30808-6/301206310_2032151983649109_8170939657648086653_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=QIrUGKHqtloAX9EiZbj&_nc_ht=scontent.fprn7-1.fna&oh=00_AfA4Lhw9zycaVV7QUeQyZu_Cp9vsgxTZDi80C-l83VOYuA&oe=63718B2A"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className='text-white'>Fotografi nga sesioni i fundit i stërvitjeve</h5>
          <p>Trajneri Arsim Thaçi</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='fotografia-slider'>
        <img
          className=""
          src="https://scontent.fprn7-1.fna.fbcdn.net/v/t39.30808-6/301197676_2032151433649164_5126375494905733017_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=wUXaNNe7SokAX__PkX7&_nc_ht=scontent.fprn7-1.fna&oh=00_AfCey1DzML2lXpbufXVmouGppBqZTp2H4FaEb2BI9mw-Hg&oe=63732BFE"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className='text-white'>Fotografi nga sesioni i fundit i stërvitjeve</h5>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='fotografia-slider'>
        <img
          className="d-block w-100"
          src="https://scontent.fprn7-1.fna.fbcdn.net/v/t39.30808-6/301238515_2032149836982657_7214906874501501189_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=S10e-eBC0HgAX8eNV0F&_nc_ht=scontent.fprn7-1.fna&oh=00_AfC2lIMUB7W1jt1kZY7NQTSP5EZw84YA9OJRJBZJzYsIog&oe=6372D09D"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className='text-white'>Fotografi nga sesioni i fundit i stërvitjeve</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Slideri;