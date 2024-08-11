import React, { useEffect, useRef, useState } from 'react'
import { useCart, useDispatch } from './Contextreducer';

const Card = (props) => {
	let options = props.options;
	let priceOptions = Object.keys(options[0]);
	const [quantity, setQuantity] = useState(1);
	const [size, setSize] = useState("");
	const dispatch = useDispatch();
	const data= useCart();
	const priceRef = useRef();
	const finalPrice = quantity * parseInt(options[0][size])
	// let foodItem = props.item;
	const handleAddtoCart = async()=>{
		let food = [];
		for(const item of data){
			if(item.id === props.foodItem._id ){
				console.log("item",item);
				
				food = item

				break;
			}
		}
		console.log(food);
		
		if(food !== []){
			if(food.size === size){
				await dispatch({type: "UPDATE", id:props.foodItem._id, quantity : quantity, price: finalPrice});
				return
			}
			else if(food.size !== size){
				await dispatch({type : "ADD" , id: props.foodItem._id, name:props.foodItem.name,img:props.foodItem.img,price: finalPrice, quantity : quantity, size: size})
				return
			}
			return 
		}
		await dispatch({type : "ADD" , id: props.foodItem._id, name:props.foodItem.name,price: finalPrice, quantity : quantity, size: size})
		
	}
	useEffect(()=>{
		setSize(priceRef.current.value);
		// console.log(options[0][size]);
		
	},[])
  return (
    <div>
        <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
					<img src={props.foodItem.img} className="card-img-top" alt="..." style={{height : "120px", objectFit:"fill"}} />
					<div className="card-body">
						<h5 className="card-title">{props.foodItem.name}</h5>
						<div className="container w-100">
							<select className="m-2 h-100 bg-success rounded" onChange={(e)=>setQuantity(e.target.value)}>
								{Array.from(Array(6), (e, i) => {
									return (
										<option key={i + 1} value={i + 1}>
											{i + 1}
										</option>
									);
								})}
							</select>
							<select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
								{priceOptions.map((data)=>{
									return <option key={data} value={data}>{data}</option>
								})}
							</select>
							<div className="d-inline h-100 fs-5">{finalPrice}/-</div>
						</div>
						<hr/>
						<div className='btn btn-success justify-center ms-2' onClick={handleAddtoCart}>Add to Cart</div>
					</div>
				</div>
    </div>
  )
}

export default Card