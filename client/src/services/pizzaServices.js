/* eslint-disable no-useless-constructor */
import axios from 'axios';

export default class PizzaService {

    constructor() {}

    async createNewPizza(pirat){
        try{
            const addPirate = await axios.post('http://localhost:8000/api/pizzas/new', pirat);
            console.log(addPirate);
            return addPirate.data.pirates;
        }catch(err){
            return err;
            
        }
    }

    async getOneSingleizza(id) {
        try {
            const pirate = await axios.get(`http://localhost:8000/api/pizzas/${id}`)
            return pirate.data.pirate;
        } catch(err) {
            return err;
        }
    };

    async getAllPizza() {
         try {
            const pizzaList = await axios.get('http://localhost:8000/api/pizzas');
            console.log(pizzaList)
            return pizzaList.data.pizzas;

        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async updatePizza(id, Pirate) {
        try {
            const updatedPirate = await axios.put(`http://localhost:8000/api/pizzas/update/${id}`, Pirate)
            return updatedPirate.data.pirates;
        } catch(err) {
            return err;
        }
    }

    async deletePizza(id) {
        try{
            const deletePirate = await axios.delete(`http://localhost:8000/api/pizzas/delete/${id}`)
            return deletePirate.data.response;
        } catch(err) {
            return err;
        }
    }

    async registerUser(user) {
        try {
            const response = await axios.post('http://localhost:8000/api/users/new', user);
            return response.data.user;

        } catch(err) {
            return err;
        }
    }

    async loginUser(user) {
        try {
            const response = await axios.post('http://localhost:8000/api/users/login', user);
            return response.data.user;

        } catch(err) {
            return err;
        }
    }



};