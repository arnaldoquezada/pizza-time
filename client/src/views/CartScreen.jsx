import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'


// const changeCart = (idx, price) =>{
//     const newItem = cart.items.map((item, ix) => {
//         if(idx === ix){
//             item.cant++;
//     }
//     })

//     setCart({ ...cart, total:price+cart.total, items:[...cart.items]})   

// }


export default function CartScreen() {

    const { cart, setCart } = useContext(CartContext);
  

    const changeCart = (idx, price, op) =>{
       cart.items.map((item, ix) => {
        if(idx === ix && op===1){
            item.cant++;
        }
        if(idx === ix && op===2){
            item.cant--;
            
        }
    })
    console.log("Nuevo item ")
    setCart({ ...cart, total: price+cart.total, items:[...cart.items]})  
}

    return (
        
        <div>
            {console.log("Aqui estoy: "+cart.items)}
            <div className="row" justify-content-center>
                <div className="col-md-6">
                    <h2 style={{ fontSize: '40px' }}>Mi Carro</h2>
                    <h3>{cart.total}</h3>
                    {cart.items.length > 0 ?
                        cart.items.map((item, idx) => {
                            return (
                                <div key={idx} className="flex-container">
                                    <div className="text-left m-1 w-100">
                                        <h1>{item.name} - "{item.varie}"</h1>
                                        <h1>Precio : {item.cant * item.price}</h1>
                                        <h1>Cantidad :
                                            <i className="fa fa-plus" aria-hidden="true"
                                              onClick={()=>{
                                                changeCart(idx, item.price, 1)
                                            }}></i>
                                            <b>{item.cant}</b>
                                            <i className="fa fa-minus" aria-hidden="true"
                                            onClick={()=>{
                                                changeCart(idx, item.price, 2)
                                            }}
                                            ></i>
                                        </h1>

                                    </div>
                                    <div className="m-1 w100">
                                        <img src={item.image} alt="" style={{ width:'80px', height:'80px' }}       />
                                    </div>
                                    <div className="m-1 w100">
                                        <i className="fa fa-trash mt-5" aria-hidden="true"></i>
                                    </div>

                                </div>
                            )
                        }) : "Sin Elementos"
                    }




                </div>
                <div className="col-md4">

                </div>
            </div>
        </div>
    )
}
