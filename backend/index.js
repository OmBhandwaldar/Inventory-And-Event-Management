const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose =  require('mongoose');
require('dotenv').config(); // Load environment variables from .env file


const url = process.env.MONGO_URL; // Access MONGO_URL from environment variables

const start = async ()=>{
    const connect = await mongoose.connect(url);
    if(connect)
    {
    console.log("Connected to MongoDB");
    // console.log(connect)
    }
    else
    {
        console.log("Failed to connect to MongoDB");
    }
}

// const { Inventory } = require('./db');

// const getInventory = async ()=>{ 
//     try { 
//         const invent = await Inventory.find({}); 
//         console.log(invent); 
//     } catch (error) { 
//         console.log(error) 
//     } 
// }

start();
// getInventory();

app.use(cors());
app.use(express.json());

const mainRouter = require('./routes/index');

app.use('/api/v1/', mainRouter);


app.listen(PORT, ()=>{console.log(`Listening on port ${PORT}`)});