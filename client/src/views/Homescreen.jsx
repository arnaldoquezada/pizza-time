import React, { useEffect, useState } from 'react'
import PizzaService from '../services/pizzaServices'
import Pizza from '../component/Pizza'


export default function Homescreen() {

    const [pizzas, setPizzas] = useState([])

    const pizzaService = new PizzaService();


    const allPizzasFromServices = async () => {
        try{
            const misPizzas = await pizzaService.getAllPizza();
            console.log('Esto llego del services: '+misPizzas)
            setPizzas(misPizzas)
        }catch (error){
            console.log('error del servicio: '+ error)
        }   
    }

  

    useEffect(() => {

        allPizzasFromServices();

    },[]);
    return (
        <>
            <div className="row justify-content-center">

                { pizzas.length > 0 ? (
                    pizzas.map(pizza => {
                        return <div className="col-md-3 m-3" key={pizza._id}>
                            <div>
                                <Pizza pizza={pizza} />
                            </div>
                        </div>
                    })
                ): 'No hay Pizzas agregadas'}
            </div>
        </>
    )
}
