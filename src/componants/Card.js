import React from 'react'

const Card = () => {
  return (
    <div>
        <div class="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
					<img src="..." class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">Some quick example text to build.</p>
						<div className="container w-100">
							<select className="m-2 h-100 bg-success rounded">
								{Array.from(Array(6), (e, i) => {
									return (
										<option key={i + 1} value={i + 1}>
											{i + 1}
										</option>
									);
								})}
							</select>
							<select className="m-2 h-100 bg-success rounded">
								<option value="half">half</option>
							</select>
							<div className="d-inline h-100 fs-5">Total Price</div>
						</div>
					</div>
				</div>
    </div>
  )
}

export default Card