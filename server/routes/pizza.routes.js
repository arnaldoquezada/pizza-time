const PizzaController = require('../controller/pizza.controller');

module.exports = app => {
    app.get('/api/pizzas', PizzaController.findAllPizzas);
    app.put('/api/pizzas/update/:id',PizzaController.updatePizza);
    app.get('/api/pizzas/:id',PizzaController.getOneSinglePizza );
    app.post('/api/pizzas/new', PizzaController.creatNewPizza);
    app.delete('/api/pizzas/delete/:id', PizzaController.deletePizza);
}