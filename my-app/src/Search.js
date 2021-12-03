import React, { Component } from "react";
import { App } from './App.js';
const { MongoClient } = require('mongodb');

run().catch(console.dir);

async function run(){
    // connect to your cluster
    const uri = "mongodb+srv://cjhess19:csci331powderportal@powderportal.yycfm.mongodb.net/PowderPortal?retryWrites=true&w=majority";
    const client = await MongoClient.connect(uri, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    });
    // specify the DB's name
    const db = client.db('SkiResorts');
    // execute find query
    const items = await db.collection('resorts').find({name: "Bridger Bowl Ski Resort"}).toArray();
    console.log(items);
    // close connection
    client.close();
}