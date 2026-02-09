const express = require("express");
const app = express();
const cors = require('cors')

// Adds headers: Access-Control-Allow-Origin: *
app.use(cors())

//import middlewares
app.use(express.json());
require("dotenv").config();

//extract port number
const PORT = process.env.PORT || 5000

//db connection
const {dbConnect} = require("./config/dbConnect");
dbConnect();

//import routes and mount it
const authRoutes = require("./routes/AuthRoutes");
app.use("/api/v1/", authRoutes);



//default route
app.get("/", (req, res) => {
    res.send(`<h1>Welcome to HOMEPAGE</h1>`);
})

//app activate
app.listen(PORT, () => {
    console.log(`App is running successfully at post no. ${PORT}`);
});
