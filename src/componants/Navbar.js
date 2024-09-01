import React, { useState } from 'react'
import { Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './Contextreducer';

const Navbar = () => {
  const [cartView, setCartView] = useState(false);
  const auth = localStorage.getItem("authToken");
  const navigate = useNavigate()

  const handlelogout =()=>{
    localStorage.clear();
    navigate("/login")
  }
  const items = useCart();
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top z-index-0">
  <div className="container-fluid">
    <Link className="navbar-brand fs-3 mb-2" to="/">New Samrat</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul className="navbar-nav me-auto mb-2">
        <li>
        <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
        </li>
        {
          (auth) ? 
          <li>
        <Link className="nav-link active fs-5" aria-current="page" to="/myorder">My Orders</Link>
        </li>
        : ""
        }
      </ul>
      <div className='d-flex'>
       {
        (!auth) ?
        <>
        <Link className="btn bg-white text-success mx-5" to="/login">Login</Link>
        </>
        :
        <>
        <div className="btn bg-white text-success mx-2" onClick={()=>setCartView(true)}>My Cart {" "} <Badge pill bg="danger">{items.length}</Badge></div>
        {cartView ? <Modal onClose={()=>setCartView(false)}><Cart></Cart></Modal> : "" }
        <div className="btn bg-white text-success mx-2" onClick={handlelogout}>Logout</div>
        </>
       }
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar