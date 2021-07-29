import React, { useContext, useEffect } from 'react'
import { CartContext } from '../contexts/CartContext'

export default function CartScreen() {

    const { cart, setCart } = useContext(CartContext);

    const sumarTotal = () => {
        let total = 0;
        cart.items.forEach((item, idx) => {
            total = (item.cant * item.price) + total;
        })
        setCart({ ...cart, total: total })
    }

    useEffect(() => {
        sumarTotal()
    }, [cart.items])

    const eliminarPizza = (idx) => {
        const newItems = cart.items.filter((item, i) => i !== idx)
        console.log("ValoresBorrados: ", newItems)
        setCart({ ...cart, items: newItems })
    }

    const changeCart = (idx, val) => {
        console.log("valor: " + val)
        console.log("Items en carro:", cart.items[idx])
        const newItemsCart = cart.items.map((it, i) => {
            if (idx === i) {
                if (val >= 11) {
                    alert("No puede tener mas de 10 pizzas")
                } else {
                    if (val <=0) {
                        console.log("Llego Aqui")
                        eliminarPizza()
                    } else {
                        it = { ...it, cant: val };
                    }

                }

            }
            return it;

        })
        console.log(newItemsCart)
        console.log("Total: ", cart.total)
        setCart({ ...cart, items: newItemsCart })
    }

    return (

        <div>
            <div className="row" justify-content center container>
                <div className="col-md-6">
                    <h2 style={{ fontSize: '40px' }}>Mi Carro</h2><h3>{cart.total}</h3>
                    {cart.items.length > 0 ?
                        cart.items.map((item, idx) => {
                            return (
                                <div key={idx} className="flex-container">
                                    <div className="text-left m-1 w-100">
                                        <h1>{item.name} - "{item.varie}"</h1>
                                        <h1>Precio : {item.cant * item.price}</h1>
                                        <h1>Cantidad :
                                            <i className="fa fa-plus" aria-hidden="true"
                                                onClick={() => {
                                                    changeCart(idx, item.cant + 1)
                                                }}></i>
                                            <b>{item.cant}</b>
                                            <i className="fa fa-minus" aria-hidden="true"
                                                onClick={() => {
                                                    changeCart(idx, item.cant - 1)
                                                }}
                                            ></i>
                                        </h1>

                                    </div>
                                    <div className="m-1 w100">
                                        <img src={item.image} alt="" style={{ width: '80px', height: '80px' }} />
                                    </div>
                                    <div className="m-1 w100">
                                        <i className="fa fa-trash mt-5" aria-hidden="true"
                                            onClick={() => eliminarPizza(idx)}
                                        ></i>
                                    </div>
                                    <div className="m-1 w100">
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
