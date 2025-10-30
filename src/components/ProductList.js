import React from 'react'
import '../styles/ProductList.css'
import {Link} from 'react-router-dom'
const productsList=[
    {   
        "id":1,
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8IuSVcZOMo_LHCFXVTsgoikfNjFAFbEqhpg&s",
        "name":"Samsung Galaxy S8 64GB",
        "color":"black",
        "price":41000
    },
    { 
        "id":2,
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8IuSVcZOMo_LHCFXVTsgoikfNjFAFbEqhpg&s",
        "name":"Samsung Galaxy S9 64GB",
        "color":"black",
        "price":40000
    },
    { 
        "id":3,
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8IuSVcZOMo_LHCFXVTsgoikfNjFAFbEqhpg&s",
        "name":"Samsung Galaxy S8+64GB",
        "color":"black",
        "price":19000
    },
    { 
        "id":4,
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8IuSVcZOMo_LHCFXVTsgoikfNjFAFbEqhpg&s",
        "name":"Samsung Galaxy S9+ 64GB",
        "color":"black",
        "price":18000
    },
    { 
        "id":5,
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8IuSVcZOMo_LHCFXVTsgoikfNjFAFbEqhpg&s",
        "name":"Samsung Galaxy Note 9 6/128GB",
        "color":"black",
        "price":34000
    },
    { 
        "id":6,
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8IuSVcZOMo_LHCFXVTsgoikfNjFAFbEqhpg&s",
        "name":"Samsung Galaxy Note 8 64GB",
        "color":"black",
        "price":20000
    }
]

const ProductList = () => {
  return (
    <div>
        {productsList.map((product,index)=>(
    <div className="container" key={index}>
        <img src={product.img}/>
        <div className="content">
            <p>{product.name}</p>
            <p>{product.color}</p>
            <div className="price-content">
            <p>Price :{product.price}</p>
            <Link to={`/products/${product.id}`}>
            <button>Buy</button></Link>
            </div>
        </div>  
      </div>
        ))}
        </div>
  )
}

export default ProductList