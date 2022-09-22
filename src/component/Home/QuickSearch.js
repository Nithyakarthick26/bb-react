import React, { Component } from 'react';
import './QuickSearch.css';


//const qurl="https://bb-api-code.herokuapp.com/products"

class QuickSearch extends Component {
    constructor(){
        super()

        this.state={
            product_name:''
        }
    }
    render() {
        return (

            <section id="product">
                <div className="'container m-5">
                    <h1 className="text-center my-5">My smart basket</h1>
                    <h3 className="text-center my-5">Fruits and Vegetables</h3>
                    <div className="row">
                        <div className="col-lg-2 col-md-6 mb-2">
                            <div className="card ">
                                <img src="https://i.ibb.co/VWjCcCx/fresh-vege.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center ">
                                    <h5 className="card-title"><a href="fruitsvegetables.html">Fresh Vegetables</a></h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-2">
                            <div className="card">
                                <img src="https://i.ibb.co/wg3y4sS/freshfruits.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title"><a href="freshfruits.html">Fresh Fruits</a></h5>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-2">
                            <div className="card">
                                <img src="https://i.ibb.co/m91szJ7/cuts.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title"><a href="cutsandsprouts.html">Cuts and Sprouts</a></h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-2">
                            <div className="card">
                                <img src="https://i.ibb.co/6JHJKtb/exotic.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title"><a href="exoticfruitsandveggies.html">Exotic Fruits and Veggies</a></h5>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-2">
                            <div className="card">
                                <img src="https://i.ibb.co/wRxhdnD/pooja.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title"><a href="poojaflowers.html">Pooja Flowers</a></h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-2">
                            <div className="card">
                                <img src="https://i.ibb.co/28qdNRK/herbs1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title"><a href="herbsandseasoning.html">Herbs and Seasonings</a></h5>

                                </div>
                            </div>
                        </div>
                    </div>


                    <h3 className="text-center my-5">Your Daily Staples</h3>
                    <div className="row">
                        <div className="col-lg-2 col-md-6 mb-2">
                            <div className="card ">
                                <img src="https://i.ibb.co/FXH3LmL/oil.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center ">
                                    <h5 className="card-title"><a href="blendedcookingoils.html">Blended Cooking Oils</a></h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-2">
                            <div className="card">
                                <img src="https://i.ibb.co/sC5MHCQ/ricebranoils.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title"><a href="ricebranoils.html">Rice Bran Oils</a></h5>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-2">
                            <div className="card">
                                <img src="https://i.ibb.co/St7vmNk/cooking-paste.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title"><a href="cookingpaste.html">Cooking Paste</a></h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-2">
                            <div className="card">
                                <img src="https://i.ibb.co/qg8w74g/herbs-and-seasoning.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title"><a href="herbsandseasoningpowders.html">Herbs and Seasoning Powders</a></h5>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-2">
                            <div className="card">
                                <img src="https://i.ibb.co/SVrfPfV/powder-spices.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title"><a href="powderspices.html">Powder Spices</a></h5>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-2">
                            <div className="card">
                                <img src="https://i.ibb.co/wYXVf5m/blended-masala.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title"><a href="blendedmasala.html">Blended Masala</a></h5>

                                </div>
                            </div>
                        </div>
                    </div>


                    <h3 className="text-center my-5">Beverages</h3>
                    <div className="row">
                        <div className="col-lg-2 col-md-6 mb-2">
                            <div className="card b ">
                                <img src="https://i.ibb.co/CnqYbsk/soft-drinks.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center ">
                                    <h5 className="card-title"><a href="softdrinks.html">Soft Drinks</a></h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-2">
                            <div className="card b">
                                <img src="https://i.ibb.co/FbWXGdq/coconut-water.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title"><a href="coconutwater.html">Coconut Water</a></h5>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-2">
                            <div className="card b">
                                <img src="https://i.ibb.co/JyBV7TM/energy-drinks.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title"><a href="energydrinks.html">Energy Drinks</a></h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-2">
                            <div className="card b">
                                <img src="https://i.ibb.co/jvV5RYr/syrups.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title"><a href="syrupsandconcentrates.html">Syrups and Concentrates</a></h5>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-2">
                            <div className="card b">
                                <img src="https://i.ibb.co/vsrv30k/juices.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title"><a href="juices.html">Juices</a></h5>
                                </div>
                            </div>
                        </div>

                    </div>


                    <h3 className="text-center my-5">Snacks Store</h3>
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="card s">
                                <img src="https://i.ibb.co/Xx1vgkP/biscuits.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center ">
                                    <h5 className="card-title"><a href="biscuits.html">Biscuits and Cookies</a></h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="card s">
                                <img src="https://i.ibb.co/CKjhS3n/namkeens.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center ">
                                    <h5 className="card-title"><a href="namkeens.html">Namkeens, Chips and Nachos</a></h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="card s">
                                <img src="https://i.ibb.co/N1W1mzt/frozen-snacks.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title"><a href="frozensnacks.html">Frozen Snacks</a></h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="card s">
                                <img src="https://i.ibb.co/h747dVs/soups.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title"><a href="soups.html">Soups, Noodles and Pasta</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-center my-5">Cleaning and Household</h3>
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="card c">
                                <img src="https://i.ibb.co/mXT71Sm/clean.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center ">
                                    <h5 className="card-title"><a href="cleaners.html">Cleaners and Disinfectants</a></h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="card c">
                                <img src="https://i.ibb.co/yXK8yst/fabric.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title"><a href="detergents.html">Detergents and Fabric Care</a></h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="card c">
                                <img src="https://i.ibb.co/F0cv4Qn/scrubs.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title"><a href="kitchenwipes.html">Kitchen Wipes and Utensil Scrubs</a></h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="card c">
                                <img src="https://i.ibb.co/yR5hvLM/freshener.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title"><a href="fresheners.html">Fresheners and Repellants</a></h5>

                                </div>
                            </div>
                        </div>
                    </div>



                    <h3 className="text-center my-5">Beauty and Hygiene</h3>
                    <div className="row">
                        <div className="col-lg-2 col-md-6 mb-2">
                            <div className="card beauty ">
                                <img src="https://i.ibb.co/8rtWMg2/lips.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center ">
                                    <h5 className="card-title"><a href="lips.html">Lips</a></h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-2">
                            <div className="card beauty">
                                <img src="https://i.ibb.co/N20RL4h/deos.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title"><a href="deos.html">Deos</a></h5>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-2">
                            <div className="card beauty">
                                <img src="https://i.ibb.co/mbpQR88/serum.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title"><a href="serums.html">Serums and Moisturisers</a></h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-2">
                            <div className="card beauty">
                                <img src="https://i.ibb.co/J2GQKhZ/cream.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title"><a href="bb.html">BB, CC Creams</a></h5>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-2">
                            <div className="card beauty">
                                <img src="https://i.ibb.co/H4Jz5Ng/eye.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title"><a href="eyemakeup.html">Eye Makeup</a></h5>

                                </div>
                            </div>
                        </div>

                    </div>


                    <h3 className="text-center my-5">Home and Kitchen</h3>
                    <div className="row">
                        <div className="col-lg-2 col-md-6 mb-2">
                            <div className="card ">
                                <img src="https://i.ibb.co/bWMpVFC/under150.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center ">
                                    <h5 className="card-title"><a href="under.html" >Under Rs.150</a></h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-2">
                            <div className="card">
                                <img src="https://i.ibb.co/WfYL1JJ/under.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title"><a href="below.html">Rs.150-Rs.300</a></h5>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-2">
                            <div className="card">
                                <img src="https://i.ibb.co/dfvbvcz/notes.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title"><a href="notebooks.html">Notebooks, Files and Folders</a></h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-2">
                            <div className="card">
                                <img src="https://i.ibb.co/12w8CWb/mugs.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title"><a href="buckets.html">Buckets and Mugs</a></h5>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-2">
                            <div className="card">
                                <img src="https://i.ibb.co/k14ZMsq/tawa.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title"><a href="tawa.html">Tawa, Kadai and Pans</a></h5>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-2">
                            <div className="card">
                                <img src="https://i.ibb.co/pwvCbPh/cups.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title"><a href="cups.html">Cups, Mugs  Tumblers</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                
                <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
        aria-label="Slide 0"></button>

    </div>

    <div className="container border-2px solid gray carousel-inner justify-content col-lg-6 col-md-6 col-12">
      <div className="carousel-item active">
        <img src="https://i.ibb.co/7CmQ6b7/new1.webp" className="d-block w-100" alt="..."/>
      </div>

      <div className="carousel-item w-100 col-lg-6 col-md-6 col-12">
        <img src="https://i.ibb.co/KFM1X2k/new2.webp" className="d-block " alt="..."/>
      </div>


      <div className="carousel-item col-lg-6 col-md-6 col-12 ">

        <img src="https://i.ibb.co/y4fRdvX/new3.webp" className="d-block " alt="..."/>
      </div>

      <div className="carousel-item col-lg-6 col-md-6 col-12 ">
        <img src="https://i.ibb.co/3WWqfTJ/new4.webp" className="d-block " alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
 
    <div id="product">
      <div className="'container m-5">
        <h3 className="text-center my-5">Bank Offers</h3>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-12">
            <div className="card bank ">
              <img src="https://i.ibb.co/0JCvtJ5/bank1.webp" className="card-img-top" alt="..."/>
              <div className="card-body text-center ">
                
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-12">
            <div className="card bank ">
              <img src="https://i.ibb.co/jRh2Hhs/bank2.webp" className="card-img-top" alt="..."/>
              <div className="card-body text-center">
                

              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-12">
            <div className="card bank ">
              <img src="https://i.ibb.co/RNBv4LB/bank3.webp" className="card-img-top" alt="..."/>
              <div className="card-body text-center">
                
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-12">
            <div className="card bank">
              <img src="https://i.ibb.co/cJdVYWR/bank4.webp" className="card-img-top" alt="..."/>
              <div className="card-body text-center">
                

              </div>
            </div>
          </div>
        </div>
      </div>
</div>
                </div>

                <section id="contact">
                    <div className="container box">
                        <div className="row">
                            <div className="col-lg-6 mb-4 h-100">
                                <img src="https://i.ibb.co/mB6mkGm/logo1.jpg" className="img-fluid img" alt=".." />
                            </div>
                            <div className="col-lg-6 mb-4 h-100">
                                <h4>CONTACT US</h4>
                                <form>
                                    <input type="text" className="form-control" placeholder=" Enter your name"/>
                                    <input type="Email" className="form-control" placeholder=" Enter your mail id"/>
                                    <textarea className="form-control" placeholder="Enter your message"></textarea>
                                    <button className="btn btn-primary"> Send Message</button>
                                </form>

                            </div>

                        </div>
                    </div>
                </section>
            </section>
            
        )
    }
    
    }


export default QuickSearch;