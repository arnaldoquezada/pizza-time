const mongoose = require('mongoose');

const PizzaSchema = new mongoose.Schema({
    name: {type:String, require},
    varients:[],
    prices:[],
    category:{type:String, require},
    image: {type:String , require},
    description: {type:String , require}
},
{timestamps: true}
);
const pizzaModel = mongoose.model('Pizza', PizzaSchema);

module.exports = pizzaModel;