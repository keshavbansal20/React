// no of videos,views
// Average length of videos
//  Detail of each video -> {name,duration}
//  average watch time
// -> pdf fill
// https://www.youtube.com/playlist?list=PLzkuLC6Yvumv_Rd5apfPRWEcjf9b1JRnq

const puppeteer = require("puppeteer");
const PDFDocument = require("pdfkit");
const fs = require("fs");

let pName = process.argv[2];

let cTab;
(async function fn(){
    try{
        let browserOpenPromise = puppeteer.launch({
            headless:false,
            defaultViewport:null,
            args:["--start-maximized"]
        })
        let browser = await browserOpenPromise;
        let allTabsArr = await browser.pages();
        cTab = allTabsArr[0];
        await cTab.goto("https://www.youtube.com/playlist?list=PLzkuLC6Yvumv_Rd5apfPRWEcjf9b1JRnq");
        await cTab.waitForSelector("h1#title");
    } catch(err){
        console.log(err);
    }
})