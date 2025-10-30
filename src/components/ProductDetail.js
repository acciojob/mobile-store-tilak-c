import React from 'react'
import {Link,useParams} from 'react-router-dom'
import '../styles/ProductDetail.css'
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

const ProductDetail = () => {
    const {id}=useParams();
    const product=productsList.find(i=>i.id===Number(id));
  return (
    <div>
    <div className="container">
        <img src={product.img}/>
        <div className="content">
            <p>{product.name}</p>
            <p>{product.color}</p>
            <p>Price :{product.price}</p>
            <Link to="/" className="btn">Other Products</Link>
        </div>  
      </div>
        </div>
  )
}

export default ProductDetail