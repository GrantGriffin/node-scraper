let express = require('express')
let path = require('path')
let request = require('request')
let cheerio = require('cheerio')
let fs = require('fs')
let app = express()
let port = 8000
let url = 'https://google.com'

//(ex1) this pulls the entire body of the url
// request(url, (err, resp, body) => {
//     if(err) {
//         console.log(`ERROR: ${err}`)
//     } else {
//         console.log(body)
//     }
// })

//(ex2) this saves the entire page
// let destination = fs.createWriteStream('./downloads/google.html')
// request(url)
//     .pipe(destination)


//(ex3) this saves the entire page with confirmations
let destination = fs.createWriteStream('./downloads/google2.html')
request(url)
    .pipe(destination)
    .on('finish', () => console.log('done'))
    .on('error', err => console.log(`ERROR: ${err}`))

app.listen(port)
console.log(`scraping server running on: ${port}`)
