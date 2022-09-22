import React,{Component} from 'react';
import './Header.css';


const curl="https://bb-api-code.herokuapp.com/category";
const url="https://bb-api-code.herokuapp.com/location";



class Header extends Component{

  constructor(){
    super()

    this.state={
      
      location:'',
      category:''
    }
  }

   renderCategory=(data)=>{
    if(data){
    return data.map((item)=>{
      return(
        <option value={item.category_id} key={item.category_id}>{item.category}</option>
      )
    })
   }
  }

  renderLocation=(data)=>{
    if(data){
    return data.map((item)=>{
      return(
        <option value={item.state_id} key={item.state_id}>{item.location}</option>
      )
    })
   }
  }
    render(){
        return(
            <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top " id="navbar">
  <div className="container-fluid">
    <a className="navbar-brand logo" href="logo"><img src="https://i.ibb.co/wdBJtgZ/logo1.jpg" alt=""/>BIGBASKET</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto  ">
        <li className="nav-item">
          <a className="nav-link " href="#Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#product">Products</a>
        </li>
        
        <li className="nav-item color-black">
          <a className="nav-link " href="#contact">Contacts</a>
        </li>
        </ul>
        <form className="d-flex ">
          <input type="text"  className="form-control me-auto"/>
          <button type="submit" className="btn btn-secondary "> Search</button>
      </form>
        <button className="btn p-2 my-lg-0 my-2"><a href="signup.html" target="_blank">SignUp</a></button>
    <button className="btn p-2 my-lg-0 my-2"><a href="login.html"target="_blank">LogIn</a></button>
    </div>
</div>   
</nav>

<div className=" container bg-light clearfix">

    <div className=" dropdown btn-group align-baseline">
      
        <button className="border border-success btn btn-light float-start  dropdown-toggle">
        <select id="category">
          <option> -SEARCH BY CATEGORY-</option>
          {this.renderCategory(this.state.category)}
          </select>
        </button>
      
    </div>

    <button className="border border-success btn btn-light float-end bi bi-basket-fill"> My Basket</button>
    <button className="border border-success btn btn-light float-end bi bi-telephone-forward-fill"> 1860 123 1000</button>
    
      <button className="border border-success btn btn-light bi bi-geo-alt dropdown-toggle">
      <select id="location">
        <option>SELECT YOUR CITY </option>
        {this.renderLocation(this.state.location)}
        </select>
      </button>
    
    <button className=" border border-success btn btn-light float-end bi bi-tags-fill"> Offers</button>
    <button className="border border-success btn btn-light float-end bi bi-house-heart"> BB Speciality</button>
    <button onClick="changeMode()" className="mode border border-success"  >Change Mode</button>
    </div>

  </header>
        )
    }
    //api calling on page load
    componentDidMount(){
      fetch((url,curl),{method:'GET'})
      .then((res)=>res.json())
      .then((data)=>{
        this.setState({location:data}) ;
        this.setState({category:data}) 
      })
    }
    }

    

export default Header;