const express = require('express');
const app = express();
const port = 8000; 
const cors = require('cors');

require('./server/config/mongoose.config');

app.use(cors());

app.use(express.json(), express.urlencoded({extended: true}));

const allMyPiratesRoutes = require('./server/routes/pizza.routes');

allMyPiratesRoutes(app);

app.listen(port, () => {
    'Server is running and ready'
    console.log(`Server is running in the port ${port}`)})