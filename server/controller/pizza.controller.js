
const Pizza = require('../model/pizza.models');

module.exports.findAllPizzas = (req, res) => {
    Pizza.find()
    .then(allPizzas => res.json({pizzas: allPizzas}))
    .catch(err => res.json({error: err}));
}

module.exports.creatNewPizza = (req, res) => {
    Pizza.create(req.body)
    .then(newPizza => res.send({pizzas: newPizza}))
    .catch(err => {
        console.log(err);
        res.status(500).json({
            err,
            message:"Hubo un error en el servicio"
        })
    });
}
module.exports.getOneSinglePizza = (req, res) => {
    Pizza.findOne({_id: req.params.id})   
    .then(Pizza => res.json({Pizza: Pizza}))
    .catch(err => res.status(404).json(err));
}

module.exports.updatePizza = (req, res) => {
    Pizza.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(updatedPizza => res.json({Pizzas: updatedPizza}))
    .catch(err => res.status(404).json(err));
}

module.exports.deletePizza = (req, res) => {
    Pizza.deleteOne({_id: req.params.id})
    .then(response => res.json({response: response}))
    .catch(err => res.json(err))
}