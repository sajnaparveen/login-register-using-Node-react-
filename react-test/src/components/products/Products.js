import React,{useEffect,useState} from "react";
import './Products.css'
import img2 from './img/card02.png';
import img3 from './img/card03.png';
import cart from './img/cart.png';
import user from './img/user.png';
import dark from './img/dark-logo.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Products=()=>{
    const [data,getData] = useState([]);
    const navigate=useNavigate()

    
    const getDatas=()=>{
       axios.get("http://192.168.1.4:7000/api/v2/mobile/get")
       .then((res)=>{
        // alert(res.data.message)
        getData(res.data.result)
console.log("resultss",res.data)
       }).catch((error)=>{
  console.log(error)
       })
     }
useEffect(()=>{
    getDatas();
    // logout()
    if(!localStorage.getItem('token')){
        navigate("/login")
    }
   
},[]);
const logout = ()=>{
    localStorage.clear("token")
   
}
    return(
     <div>
        <nav className="navbar">
 <div className="nav">
     <img src={dark} className="brand-logo" alt=""/>
     <div className="nav-items">
     <div className="search">
            <input type="text" className="search-box" placeholder="search products and categorys"/>
            <button className="search-btn">search</button>
     
     </div>
     {/* <a href="" onClick={logout} ><img src={user} alt=""/></a> */}
     <a href="#"><img src={cart} alt=""/></a>
     {/* <button type="button" onClick={logout} >logout</button> */}
     {/* <a href="" onClick={logout} >sdefrfr</a> */}
     
 </div>
     </div>
     
     <ul className="links-container">
       <li className="link-item"><a href="#"  className="link">home</a></li>
       <li className="link-item"><a href="#" className="link">women</a></li>
       <li className="link-item"><a href="#" className="link">men</a></li>
       <li className="link-item"><a href="#" className="link">kids</a></li>
       <li className="link-item"><a href="#"  className="link">accessories</a></li>
     </ul>
</nav>

 <div className="product-container">

{
    data.map((curElem,index)=>{
        return(
            <div key={index}>
<div className="product-card">
         <div className="product-image">
             <span className="discount-tag">{curElem.discound}off</span>
             <img src={curElem.productImage} className="product-thumb" alt=""/>
             <button className="card-btn">add to whislist</button>
         </div>
         <div className="product-info">
             <h2 className="product-brand">{curElem.productName}</h2>
             <p className="product-short-des">{curElem.Description}</p>
         <span className="price">Rs.{curElem.discoundPrice} </span>
         <span className="actual-price">Rs.{curElem.Price}</span>
         </div>
     </div>
   


            </div>
        )
    })
}

   
  
 </div>
</div>
    )
}

export default Products;