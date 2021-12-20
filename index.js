const PORT = 3000;
const express = require('express');
const app = express();
const path = require('path');
const apiRoute = require('./routes/api');

app.use('/api', apiRoute);

//path.join junta duas partes de um caminho
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => {

    console.log(`Server running on port`, PORT);

})

