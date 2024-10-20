const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose =  require('mongoose');

const url = "mongodb+srv://ashitosh123:ashitosh@cluster0.yva6o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

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

const { Inventory } = require('./db');

const getInventory = async ()=>{ 
    try { 
        const invent = await Inventory.find({}); 
        console.log(invent); 
    } catch (error) { 
        console.log(error) 
    } 
}

start();
getInventory();

app.use(cors());
app.use(express.json());

const mainRouter = require('./routes/index');

app.use('/api/v1/', mainRouter);

app.listen(PORT, ()=>{console.log(`Listening on port ${PORT}`)});