import React, { useState, useContext } from 'react'
import { Modal } from 'react-bootstrap';
import { CartContext } from '../contexts/CartContext'


export default function Pizza({ pizza }) {

    const { cart, setCart } = useContext(CartContext);


    const [quantity, setQuantity] = useState(1)
    const [varient, setVarient] = useState('small')
    

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const agregarAllCarro = () => {    
        const pizzaSelected  = {
            name:pizza.name,
            price:pizza.prices[0][varient],
            varie:varient,
            cant:quantity,
            varient:pizza.varient,
            image:pizza.image
        }
        setCart({ ...cart, total:(pizza.prices[0][varient] * quantity)+cart.total, items:[...cart.items, pizzaSelected]})   

    }
    return (
    <div>
        <div style={{ margin: '70px',height:'420px', width:'300px'}} className="shadow-lg p-3 bg-body rounded">
            <div onClick={handleShow} className="flex-cont-ele">
                <h1>{pizza.name}</h1>
                <img src={pizza.image} alt="" className="img-fluid img-center" style={{ height: '200px', width: '200px' }} />
            </div>
            <div className="flex-container">
                <div className='m-1 w-100'>
                    <p>Variedades</p>
                    <select className='form-control' value={varient} onChange={(e) => { setVarient(e.target.value) }} >
                        {pizza.varients.map(varient => {
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>
                </div>
                <div className='m-1 w-100'>
                    <p>Cantidad</p>
                    <select className='form-control' value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i + 1}>{i + 1}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="flex-container">
                <div className="m-1 w-100" >
                    <h1 className='m-1'>Total:${pizza.prices[0][varient] * quantity}                                                             
                    </h1>
                </div>
                <div className="m-1 w-100">
                    <button className="btn-danger btn"
                    onClick={() => agregarAllCarro()}>
                        AGREGAR
                    </button>
                </div>
            </div>
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={pizza.image} alt="" className='img-fluid' style={{height: '400px'}}/>
                    <p>{pizza.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className='btn' onClick={handleClose}>CERRAR</button>
                </Modal.Footer>
            </Modal>
        </div>
    </div>
    )
}
