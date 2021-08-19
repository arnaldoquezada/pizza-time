import React, { useContext, useEffect } from 'react'
import { CartContext } from '../contexts/CartContext'
import swal from 'sweetalert';

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
                if (val > 10) {
                    swal("Importante!", "Solo puedes agregar máximo 10 pizzas", "info");
                } else {
                    if (val <1) {
                        swal("Error!", "Debes agregar al menos 1 pizza", "error");
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
                <div className="col-md-5">
                    <h2 className="totalFont">TOTAL: ${cart.total}</h2>
                    {cart.items.length > 0 ?
                        cart.items.map((item, idx) => {
                            return (
                                <div key={idx} className="flex-cont-carro">
                                    <div className="text-left m-1 w-100">
                                        <h1>{item.name} - "{item.varie}"</h1>
                                        <h1>SubTotal: {item.cant * item.price}</h1>
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
                                        <i className="fa fa-trash fa-lg mt-5" aria-hidden="true"
                                            onClick={() => eliminarPizza(idx)}
                                        ></i>
                                    </div>
                                    <div className="m-1 w100">
                                        
                                    </div>
                                </div>
                            )
                        }) : "No hay nada por aquí aun!!!"
                    }
                </div>
                <div className="col-md4">

                </div>
            </div>
        </div>
    )
}
