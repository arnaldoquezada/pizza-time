import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom';


export default function Nab() {
  const { cart } = useContext(CartContext);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Pizza Time</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
        </li>
        
        <li className="nav-item">         
          <Link to="/cart" className="nav-link" aria-current="page">            
            {cart.items.length}  - ${cart.total}
          </Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        </div>
            )
}
