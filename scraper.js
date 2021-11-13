const PORT = 8000
const cheerio = require('cheerio')
const { compareDocumentPosition } = require('domutils')
const express = require('express')
const { stringify } = require('querystring')
const request = require("request-promise")

const app = express()

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
    console.log(scrapedData)
    
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

main()


app.listen(PORT, () => console.log('Server running on PORT '+ PORT))