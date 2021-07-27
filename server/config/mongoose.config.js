const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pizza_time', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify: false
}).then(() => console.log('We are connected with database to: pizza_time bd!'))
.catch(err => console.log('Se quemo la pizza, Algo Fallo!!! oh no!!!', err))