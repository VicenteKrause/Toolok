const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const userRoutes = require("./routes/user");
const microsRoutes = require('./routes/micros');
const cors = require("cors")



const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use(cors());

app.use('/api' , userRoutes);
app.use('/api', microsRoutes);


// routes
app.get('/', (req,res)=>{
    res.send("hola mundo");
});


// mongodb connectio
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error)=>console.error(error));

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
