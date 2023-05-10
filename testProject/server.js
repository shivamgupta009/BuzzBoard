const express = require("express");
const app = express();
const db = require('./dbConn/db');
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use('/api/v1/orders', require('./routes/orderRoute'));



app.listen(3000, () => {
    console.log("server is running on 3000 port")
})

module.exports = app;