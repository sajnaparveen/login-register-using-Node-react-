import React from "react";
import { useNavigate } from 'react-router-dom'

import {useLocation} from 'react-router-dom';
const Details=()=>{
    const navigate=useNavigate()
    const {state} = useLocation();
    console.log(state,"sdgsrtgtr")
    return(
        <div>
  <table className="table">

  <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>quantity</th>
                    <th>discound</th>
                    <th>discoundPrice</th>
                    <th>productImage</th>

                </tr>
            </thead>

            <tbody>
            <br></br>
                <tr>
                    <td>{state.productName}</td>
                    <td>{state.Description}</td>
                    <td>{state.Price}</td>
                    <td>{state.quantity}</td>
                    <td>{state.discound}</td>
                    <td>{state.discoundPrice}</td>
                    <td> <img src={state.productImage} className="productimg"  alt="" /></td>
                    <button className="update" >UpdateDetails</button>
                </tr>
            </tbody>
          
  </table>
 
        </div>
    )
}

export default Details;
