import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom';
import logo from '../component/img/pizzaTimeLogo.png'


export default function Nab() {
  const { cart } = useContext(CartContext);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <img src={logo} alt="" className="imgLogo"/>
    <Link className="logoName" to="/">Pizza Time!</Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Items:</Link>
        </li>         */}
        {/* <li className="nav-item">         
          
        </li>       */}
      </ul>
      {/* <Link className="fas fa-cart-arrow-down navbar-text" to="/cart"></Link> */}
    </div>
    <form className="d-flex">
      <Link className="fas fa-cart-arrow-down fa-2x fa-cart" to="/cart"></Link>
      <Link to="/cart" className="nav-link" aria-current="page">             
            {cart.items.length}  - ${cart.total}
          </Link>

    </form>
  </div>
</nav>
        </div>
            )
}
