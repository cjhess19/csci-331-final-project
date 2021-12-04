print();

function print(){
    run().catch(console.dir);
}



async function run(){
    console.log("In Run");
    var MongoClient = require('mongodb').MongoClient;
    var uri = "mongodb+srv://cjhess19:csci331powderportal@powderportal.yycfm.mongodb.net/PowderPortal?retryWrites=true&w=majority";

    MongoClient.connect(uri, function(err, db) {
    if (err) throw err;
    var dbo = db.db("SkiResorts");
    
    dbo.collection("resorts").find({name: "Whitefish Ski Resort"}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
    });
}

// async function main(){
//     /**
//      * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//      * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//      */
//      const uri = "mongodb+srv://cjhess19:csci331powderportal@powderportal.yycfm.mongodb.net/PowderPortal?retryWrites=true&w=majority";
 

//     const client = new MongoClient(uri);
 
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
 
//         // Make the appropriate DB calls
//         const db = client.db('SkiResorts');
//         // execute find query
//         const items = await db.collection('resorts').find({name: "Bridger Bowl Ski Resort"}).toArray();
//         console.log(items);
 
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// main().catch(console.error);






// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://cjhess19:csci331powderportal@powderportal.yycfm.mongodb.net/PowderPortal?retryWrites=true&w=majority";
// const client = await MongoClient.connect(uri, { 
//         useNewUrlParser: true, 
//         useUnifiedTopology: true,
// });
// const { MongoClient } = require('mongodb');

// run().catch(console.dir);



// async function run(){
//     var input = document.getElementById('resortInput').value
//     console.log(input);

//     const uri = "mongodb+srv://cjhess19:csci331powderportal@powderportal.yycfm.mongodb.net/PowderPortal?retryWrites=true&w=majority";
//     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }); 

//     console.log("In run");   
//     // connect to your cluster
//     await client.connect();
//     console.log("Connected correctly to server");
    
//     // specify the DB's name
//     const db = client.db('SkiResorts');
//     // execute find query
//     const items = await db.collection('resorts').find({name: "Bridger Bowl Ski Resort"}).toArray();
//     console.log(items);
//     // close connection
//     client.close();
// }