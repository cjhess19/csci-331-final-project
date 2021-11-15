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

run().catch(console.dir);

async function whitefish() {
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
                tableRow[tableHeaders[i]] = replaceAll($(element).text(), '\n', '')
            })
            scrapedData.push(tableRow)
        }
    })
    console.log(scrapedData)

    // Construct a document                                                                                                                                                              
    let resortDocument = {
        "name": "Whitefish Ski Resort",
        "Super Senior (70+)": scrapedData[1]['1 Day'],
        "Senior (65-69)": scrapedData[2]['1 Day'],
        "Adult (19-64)": scrapedData[0]['1 Day'],
        "Teen (13-18)": scrapedData[3]['1 Day'],
        "Child (7-12)": scrapedData[4]['1 Day']
    }
    return resortDocument;
}

async function losttrail() {
    const result = await request.get("https://losttrail.com/lift-tickets/")
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
                tableRow[tableHeaders[i]] = replaceAll($(element).text(), '\n', '')
            })
            scrapedData.push(tableRow)
        }
    })
    let resortDocument = {
        "name": "Lost Trail Ski Resort",
        "Super Senior (70+)": scrapedData[4]['Full Day'],
        "Senior (60-69)": scrapedData[3]['Full Day'],
        "Adult (13-59)": scrapedData[2]['Full Day'],
        "Child (6-12)": scrapedData[1]['Full Day']
    }

    return resortDocument;
}

async function showdown() {
    const result = await request.get("https://www.showdownmontana.com/lift-tickets")
    const $ = cheerio.load(result)
    const scrapedData = []
    const tableHeaders = []
    $("section > div > div > div > div > div > div > div > div > div > div > table > tbody > tr").each((index, element) => {
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
                tableRow[tableHeaders[i]] = replaceAll($(element).text(), '\n', '')
            })
            scrapedData.push(tableRow)
        }
    })
    let resortDocument = {
        "name": "Showdown Ski Resort",
        "Senior (70+)": scrapedData[4]['PRICE'],
        "Adult (18-69)": scrapedData[0]['PRICE'],
        "Teen (11-17)": scrapedData[5]['PRICE'],
        "Child (6-10)": scrapedData[6]['PRICE']
    }
    return resortDocument;
}

async function greatDivide() {
    const result = await request.get("https://www.skigd.com/lift-tickets/")
    const $ = cheerio.load(result)
    const scrapedData = []
    const tableHeaders = []
    $("table > thead > tr").each((index, element) => {
    const ths = $(element).find("th")
        $(ths).each((i, element) => {
        tableHeaders.push(
            replaceAll($(element).text(), '\n', '')
        )
        })
    })
    $("table > tbody > tr").each((index, element) => {
        const tds = $(element).find("td")
        const tableRow = {}
        $(tds).each((i, element) => {
            tableRow[tableHeaders[i]] = replaceAll($(element).text(), '\n','')
        })
        scrapedData.push(tableRow)
    })

    let resortDocument = {
        "name": "Great Divide Ski Resort",
        "Senior (70+)": scrapedData[4]['Price'],
        "Adult (18-69)": scrapedData[0]['Price'],
        "Teen (12-17)": scrapedData[2]['Price'],
        "Child (6-11)": scrapedData[3]['Price']
    }
    return resortDocument;
}

async function snowbowl() {
    const result = await request.get("https://www.montanasnowbowl.com/lift-tickets/")
    const $ = cheerio.load(result)
    const scrapedData = []
    const tableHeaders = []
    $("table > thead > tr").each((index, element) => {
    const ths = $(element).find("th")
        $(ths).each((i, element) => {
        tableHeaders.push(
            replaceAll($(element).text(), '\n', '')
        )
        })
    })
    $("table > tbody > tr").each((index, element) => {
        const tds = $(element).find("td")
        const tableRow = {}
        $(tds).each((i, element) => {
            tableRow[tableHeaders[i]] = replaceAll($(element).text(), '\n','')
        })
        scrapedData.push(tableRow)
    })
    let resortDocument = {
        "name": "Montana Snow Bowl",
        "Senior (60+)": scrapedData[1]['All Day'],
        "Adult (18-59)": scrapedData[0]['All Day'],
        "Student (13-22 w/ school ID)": scrapedData[1]['All Day'],
        "Child (6-12)": scrapedData[2]['All Day']
    }
    return resortDocument;
}

async function maverik() {
    const result = await request.get("https://skimaverick.com/")
    const $ = cheerio.load(result)
    const scrapedData = []
    const tableHeaders = []
    $("div > div > table > tbody > tr").each((index, element) => {
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

    let resortDocument = {
        "name": "Maverik Ski Resort",
        "Senior (65+)": scrapedData[2]['Full Day'],
        "Adult (13-64)": scrapedData[0]['Full Day'],
        "Child (5-12)": scrapedData[1]['Full Day']
    }
    return resortDocument;
}

async function bridger(){
    let resortDocument = {
        "name": "Bridger Bowl Ski Resort",
        "Super Senior (80+)": "FREE",
        "Senior (70-79)": "$39",
        "Adult (19-69)": "$69",
        "Child (7-12)": "$28" 
    }
    return resortDocument;
}

async function bigsky(){
    let resortDocument = {
        "name": "Big Sky Ski Resort",
        "Senior (70+)": "$100-$145",
        "Adult (15-69)": "$161-$225",
        "Child (7-14)": "$105-$145" 
    }
    return resortDocument;
}
async function redlodge(){
    let resortDocument = {
        "name": "Red Lodge Ski Resort",
        "Super Senior (70+)": "$25",
        "Senior (65-69)": "$49",
        "Adult (19-64)": "$65",
        "Teen (13-18)": "$48",
        "Child (6-12)": "$25" 
    }
    return resortDocument;
}
async function discovery(){
    let resortDocument = {
        "name": "Discovery Ski Resort",
        "Senior (65+)": "$52",
        "Adult (19-64)": "$59",
        "Child (6-12)": "$30" 
    }
    return resortDocument;
}

async function turner(){
    let resortDocument = {
        "name": "Turner Mountain",
        "Senior (62+)": "$35",
        "Adult (19-64)": "$42",
        "Tenn (13-18)": "$30",
        "Child (7-12)": "$25" 
    }
    return resortDocument;
}
async function blacktail(){
    let resortDocument = {
        "name": "Blacktail Mountain",
        "Senior (70+)": "$26",
        "Adult (18-69)": "$50",
        "Teen (13-17)": "$35",
        "Child (8-12)": "$25",
    }
    return resortDocument;
}
async function bearpaw(){
    let resortDocument = {
        "name": "Bear Paw Ski Bowl",
        "Senior (80+)": "FREE",
        "Adult (18-79)": "$25",
        "Youth (9-17)": "$20",
        "Child (0-8)": "FREE" 
    }
    return resortDocument;
}
async function lookout(){
    let resortDocument = {
        "name": "Lookout Pass Ski Area",
        "Super Senior (80+)": "FREE",
        "Senior (62-79)": "$47",
        "Adult (18-61)": "$59",
        "Youth (7-17)": "$47",
        "Child (0-6)": "FREE" 
    }
    return resortDocument;
}
async function tetonpass(){
    let resortDocument = {
        "name": "Teton Pass",
        "Senior (65+)": "$45",
        "Adult (18-64)": "$50",
        "Youth (7-17)": "$45",
        "Child (0-6)": "FREE" 
    }
    return resortDocument;
}

// The database to use
const dbName = "SkiResorts";

async function run() {
    try {
        
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);

        db.dropCollection("resorts");

        // select resorts collection
        const col = db.collection("resorts");

        // Read bridger data into db
        let resortDocument = await bridger();
        const brid = await col.insertOne(resortDocument);

        // Read bigsky data into db
        resortDocument = await bigsky();
        const big = await col.insertOne(resortDocument);

        // Read red lodge data into db
        resortDocument = await redlodge();
        const red = await col.insertOne(resortDocument);

        // Read discovery data into db
        resortDocument = await discovery();
        const disco = await col.insertOne(resortDocument);
        
        // Read whitefish data into db
        resortDocument = await whitefish();
        const white = await col.insertOne(resortDocument);
        
        // Read lost trail data into db
        resortDocument = await losttrail();
        const lost = await col.insertOne(resortDocument);

        // Read showdown data into db
        resortDocument = await showdown();
        const show = await col.insertOne(resortDocument);

        // Read great divide data into db
        resortDocument = await greatDivide();
        const great = await col.insertOne(resortDocument);

        // Read snowbowl data into db
        resortDocument = await snowbowl();
        const snow = await col.insertOne(resortDocument);

        // Read maverik data into db
        resortDocument = await maverik();
        const mav = await col.insertOne(resortDocument);

        // Read turner mountain data in
        resortDocument = await turner();
        const turn = await col.insertOne(resortDocument);

        // Read blacktail mountain data in
        resortDocument = await blacktail();
        const black = await col.insertOne(resortDocument);

        // Read teton pass data in
        resortDocument = await tetonpass();
        const teton = await col.insertOne(resortDocument);

        // Read lookout mountain data in
        resortDocument = await lookout();
        const look = await col.insertOne(resortDocument);

        // Read bear paw data in
        resortDocument = await bearpaw();
        const bear = await col.insertOne(resortDocument);

    } catch (err) {
        console.log(err.stack);
    }

    finally {
        await client.close();
    }
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

app.listen(PORT, () => console.log('Server running on PORT ' + PORT))
