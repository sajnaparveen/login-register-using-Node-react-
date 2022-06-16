// import './Register.css';
import React,{useState} from "react";
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

const AddProduct = ()=>{
 

    const [ product, setProduct] = useState({
        productName: "",
        Description:"",
        Price: "",
        quantity:"",
        discound:"",
        discoundPrice:"",
        productImage:"",
        categoryUuid:"",
        userUuid:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setProduct({

            ...product,
            [name]: value
        })
        // console.log(user)
    }
    const postDatas=()=>{
      
        const token=localStorage.getItem('token')
        const userUuid=localStorage.getItem('userUuid')
       axios.post("http://192.168.1.4:7000/api/v2/mobile/add",{
        headers:{"token":token}, 
       }
    //    ,{data:{userUuid:userUuid}}

       )
       .then((Response)=>{
        console.log(Response)
        
       }).catch((error)=>{
  console.log(error)
       })
     }
    return(
       
      <section className="form my-4 mx-5">
  
             <form >
                 <div className="from-row">
                 <div className="col-lg-7">
                     <input type="text" placeholder="productName" value={product.productName} name="productName" onChange={ handleChange } className="form-control "/>
                 </div>
                 </div>
                 <div className="from-row">
                 <div className="col-lg-7">
                     <input type="text" placeholder="Description" value={product.Description} name="Description" onChange={ handleChange } className="form-control"/>
                 </div>
                 </div>
                 <div className="from-row">
                 <div className="col-lg-7">
                     <input type="text" placeholder="Price" value={product.Price} name="Price" onChange={ handleChange } className="form-control"/>
                 </div>
                 </div>
                 <div className="from-row">
                 <div className="col-lg-7">
                     <input type="text" placeholder="quantity" value={product.quantity} name="quantity" onChange={ handleChange } className="form-control"/>
                 </div>
                 </div>
                 <div className="from-row">
                 <div className="col-lg-7">
                     <input type="text" placeholder="discound" value={product.discound} name="discound" onChange={ handleChange } className="form-control"/>
                 </div>
                 </div>
                 <div className="from-row">
                 <div className="col-lg-7">
                     <input type="text" placeholder="discoundPrice" value={product.discoundPrice} name="discoundPrice" onChange={ handleChange } className="form-control"/>
                 </div>
                 </div>
                 <div className="from-row">
                 <div className="col-lg-7">
                     <input type="text" placeholder="categoryUuid" value={product.categoryUuid} name="categoryUuid" onChange={ handleChange } className="form-control"/>
                 </div>
                 </div>
                 {/* <div className="from-row">
                 <div className="col-lg-7">
                     <input type="text" placeholder="userUuid" value={product.userUuid} name="userUuid" onChange={ handleChange } className="form-control"/>
                 </div>
                 </div> */}
                 <div className="from-row">
                 <div className="col-lg-7">
                     <input  type="file" value={product.productImage} name="productImage" onChange={ handleChange } className="form-control"/>
                 </div>
                 </div>
                 <div className="from-row">
                 <div className="col-lg-7" >
                     <button type="button"  onClick={postDatas} className="btn1 mt-3 mb-5">Sign Up</button>
                 </div>
                 </div>
                
             </form>
        

      </section> 

    )
}

export default AddProduct