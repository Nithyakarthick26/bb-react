import React,{Component} from 'react';
import './Search.css';

class Search extends Component{

    render(){
        return(
            <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 0"></button>
    </div>
     
    <div className="container-fluid col-lg-2 col-md-2 col-sm-2 col-xs-2 w-100 col-12">
    <div className="carousel-inner img-fluid justify-content col-lg-6 col-md-6 col-12">

      
        <div className="carousel-item active">
          <img src="https://i.ibb.co/mR1kxdJ/meeat.webp" className="d-block w-100" alt="..."/>
        </div>

      <div className="carousel-item w-100 col-lg-6 col-md-6 col-12">
            <img src="https://i.ibb.co/GsNRf4c/mang.webp" className="d-block " alt="..."/>
          </div>
        

      <div className="carousel-item col-lg-6 col-md-6 col-12 ">
        
            <img src="https://i.ibb.co/QDnTkRN/milkk.webp" className="d-block " alt="..."/>
          </div>
  
          <div className="carousel-item col-lg-6 col-md-6 col-12 ">
            <img src="https://i.ibb.co/qBGdXJZ/fresho.jpg" className="d-block " alt="..."/>
          </div>
        

      <div className="carousel-item background-size:cover col-lg-6 col-md-6 col-12">
        
            <img src="https://i.ibb.co/frGV5gm/snacks.webp" className="d-block " alt="..."/>
          </div>

          <div className="carousel-item col-lg-6 col-md-6 col-12">
            <img src="https://i.ibb.co/BLcNzq2/juice.webp" className="d-block " alt="..."/>
          </div>

          <div className="carousel-item col-lg-6 col-md-6 col-12">
            <img src="images/kitchen.jpg" className="d-block " alt="..."/>
          </div>
        
          <div className="carousel-item col-lg-6 col-md-6 col-12">
            <img src="https://i.ibb.co/hVf50YV/skin.webp" className="d-block " alt="..."/>
          </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

        )
    }
    }
    
export default Search;