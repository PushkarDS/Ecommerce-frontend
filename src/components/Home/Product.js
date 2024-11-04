import React from 'react';
import {Link} from "react-router-dom";
import ReactStars from "react-rating-stars-component";



const Product = ({p}) => {
    const options = {
        edit:false,
        color:"rgba(20,20,20,0.1)",
        activeColor:"tomato",
        size: window.innerWidth<600?20:15,
        value:p.ratings,
        isHalf:true
    }
  return (
    <Link className='productCard' to={`/product/${p._id}`}>
        <img src={p.images[0].url} alt={p.name} />
        <p>{p.name}</p>
        <div>
            <ReactStars {...options}  /> <span> ({p.numofReviews}Reviews) </span>
        </div>
        <span>{`₹${p.price}`}</span>

    
    
    </Link>

    )
}

export default Product