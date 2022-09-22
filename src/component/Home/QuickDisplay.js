import React from 'react';
import {Link} from 'react-router-dom';

const QuickDisplay=(props)=>{
    const listProducts=({productData})=>{
        if(productData){
            return productData.map((item)=>{
                return(
                    <Link to='/' key={item._id}>
                       <div className="row">

    <div className="col-lg-2 col-md-6 mb-2">
    
        <div className="card ">
            <img src={item.image} className="card-img-top" alt={item.product_name}/>
            <div className="card-body text-center ">
                <h5 className="card-title"><a href="fruitsvegetables.html">Fresh Vegetables</a></h5>
            </div>
        </div>
    </div>
</div>
                    </Link>
                )
            }
            )
        }
    }
    return(
        <>
        {listProducts(props)}
        </>
    )
}

export default QuickDisplay;