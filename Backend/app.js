const express = require("express");
const app = express();
const errormiddleware = require("./middlewares/error")
const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");
// const fileUpload = require("express-fileupload");
// const path = require("path");


require("dotenv").config({ path: "backend/config/config.env" });


app.use(express.json())
app.use(cookieParser());

// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
// const payment = require("./routes/paymentRoute");

app.use('/api', product);
app.use('/api', user);
app.use('/api', order);

//middleware for errors
app.use(errormiddleware);


module.exports = app;