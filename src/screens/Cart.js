import React from 'react'
import { useCart, useDispatch } from '../componants/Contextreducer'
import axios from 'axios';

const Cart = () => {
    const data = useCart();
    const dispatch = useDispatch();

    if(data.length === 0){
        return( <div>
            <div className='m-5 w-100 text-center fs-3'>This cart is empty..</div>
        </div>)
    }
    let totalPrice = data.reduce((total, food) => total + food.price, 0);

    const handleCheckOut = async()=>{
      const email = localStorage.getItem("email");
      const response = await axios.post("http://localhost:5000/api/v1/orderData",{
        order_data : data,
        email: email,
        order_date : new Date().toDateString()
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      })

      console.log(response);
      
      if(response.status === 200){
        dispatch({type : "DROP"})
      }
    }
  return (
    <div>
        <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <table className='table table-hover '>
          <thead className=' text-success fs-4'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Option</th>
              <th scope='col' >Amount</th>
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr>
                <th scope='row' >{index + 1}</th>
                <td >{food.name}</td>
                <td>{food.quantity}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td ><button type="button" className="btn p-0"><i className="ri-delete-bin-line" onClick={() => { dispatch({ type: "REMOVE", index: index }) }}></i></button> </td></tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='fs-2'>Total Price: {totalPrice}/-  </h1></div>
        <div>
          <button className='btn bg-success mt-5 ' onClick={handleCheckOut}  > Check Out </button>
        </div>
      </div>
    </div>
  )
}

export default Cart