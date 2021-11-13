const PORT = 8000
const cheerio = require('cheerio')
const { compareDocumentPosition } = require('domutils')
const express = require('express')
const { stringify } = require('querystring')
const request = require("request-promise")
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://cjhess19:csci331powderportal@powderportal.yycfm.mongodb.net/PowderPortal?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express()
 
 // The database to use
 const dbName = "test";
                      
 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);

         // Use the collection "people"
         const col = db.collection("people");

         // Construct a document                                                                                                                                                              
         let personDocument = {
             "name": { "first": "Alan", "last": "Turing" },
             "birth": new Date(1912, 5, 23), // June 23, 1912                                                                                                                                 
             "death": new Date(1954, 5, 7),  // June 7, 1954                                                                                                                                  
             "contribs": [ "Turing machine", "Turing test", "Turingery" ],
             "views": 1250000
         }

         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertOne(personDocument);
         // Find one document
         const myDoc = await col.findOne();
         // Print to the console
         console.log(myDoc);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

run().catch(console.dir);

async function main() {
    const result = await request.get("https://skiwhitefish.com/tickets/")
    const $ = cheerio.load(result)
    const scrapedData = []
    const tableHeaders = []
    $("div > div > div > div > table > tbody > tr").each((index, element) => {
    if (index === 0) {
        const ths = $(element).find("td")
        $(ths).each((i, element) => {
        tableHeaders.push(
            replaceAll($(element).text(), '\n', '')
        )
        })
    } else {
        const tds = $(element).find("td")
        const tableRow = {}
        $(tds).each((i, element) => {
            tableRow[tableHeaders[i]] = replaceAll($(element).text(), '\n','')
        })
        scrapedData.push(tableRow)
    }
    })
}

// async function main() {
//     const result = await request.get("https://www.showdownmontana.com/lift-tickets")
//     const $ = cheerio.load(result)
//     const scrapedData = []
//     const tableHeaders = []
//     $("section > div > div > div > div > div > div > div > div > div > div > table > tbody > tr").each((index, element) => {
//     if (index === 0) {
//         const ths = $(element).find("td")
//         $(ths).each((i, element) => {
//         tableHeaders.push(
//             replaceAll($(element).text(), '\n', '')
//         )
//         })
//     } else {
//         const tds = $(element).find("td")
//         const tableRow = {}
//         $(tds).each((i, element) => {
//             tableRow[tableHeaders[i]] = replaceAll($(element).text(), '\n','')
//         })
//         scrapedData.push(tableRow)
//     }
//     })
//     console.log(scrapedData)
// }

// async function main() {
//     const result = await request.get("https://losttrail.com/lift-tickets/")
//     const $ = cheerio.load(result)
//     const scrapedData = []
//     const tableHeaders = []
//     $("div > div > div > div > table > tbody > tr").each((index, element) => {
//     if (index === 0) {
//         const ths = $(element).find("td")
//         $(ths).each((i, element) => {
//         tableHeaders.push(
//             replaceAll($(element).text(), '\n', '')
//         )
//         })
//     } else {
//         const tds = $(element).find("td")
//         const tableRow = {}
//         $(tds).each((i, element) => {
//             tableRow[tableHeaders[i]] = replaceAll($(element).text(), '\n','')
//         })
//         scrapedData.push(tableRow)
//     }
//     })
//     console.log(scrapedData)
// }


// async function main() {
//     const result = await request.get("https://www.skigd.com/lift-tickets/")
//     const $ = cheerio.load(result)
//     const scrapedData = []
//     const tableHeaders = []
//     $("table > thead > tr").each((index, element) => {
//     const ths = $(element).find("th")
//         $(ths).each((i, element) => {
//         tableHeaders.push(
//             replaceAll($(element).text(), '\n', '')
//         )
//         })
//     })
//     $("table > tbody > tr").each((index, element) => {
//         const tds = $(element).find("td")
//         const tableRow = {}
//         $(tds).each((i, element) => {
//             tableRow[tableHeaders[i]] = replaceAll($(element).text(), '\n','')
//         })
//         scrapedData.push(tableRow)
//     })
//     console.log(scrapedData)
// }

// async function main() {
//     const result = await request.get("https://www.montanasnowbowl.com/lift-tickets/")
//     const $ = cheerio.load(result)
//     const scrapedData = []
//     const tableHeaders = []
//     $("table > thead > tr").each((index, element) => {
//     const ths = $(element).find("th")
//         $(ths).each((i, element) => {
//         tableHeaders.push(
//             replaceAll($(element).text(), '\n', '')
//         )
//         })
//     })
//     $("table > tbody > tr").each((index, element) => {
//         const tds = $(element).find("td")
//         const tableRow = {}
//         $(tds).each((i, element) => {
//             tableRow[tableHeaders[i]] = replaceAll($(element).text(), '\n','')
//         })
//         scrapedData.push(tableRow)
//     })
//     console.log(scrapedData)
// }

// async function main() {
//     const result = await request.get("https://skimaverick.com/")
//     const $ = cheerio.load(result)
//     const scrapedData = []
//     const tableHeaders = []
//     $("div > div > table > tbody > tr").each((index, element) => {
//     if (index === 0) {
//         const ths = $(element).find("td")
//         $(ths).each((i, element) => {
//         tableHeaders.push(
//             replaceAll($(element).text(), '\n', '')
//         )
//         })
//     } else {
//         const tds = $(element).find("td")
//         const tableRow = {}
//         $(tds).each((i, element) => {
//             tableRow[tableHeaders[i]] = replaceAll($(element).text(), '\n','')
//         })
//         scrapedData.push(tableRow)
//     }
//     })
//     console.log(scrapedData)
// }


function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

main()


app.listen(PORT, () => console.log('Server running on PORT '+ PORT))
