const puppeteer = require("puppeteer");

 let browseropenPromise = puppeteer.launch({
    headless:false
})
browseropenPromise
    .then(function(browser){
    console.log("browser opened");
    let alltabsPromise = browser.pages();
     return alltabsPromise
    })
    .then(function(tabs){
        let page = tabs[0];
        let googlehomepagePromise = page.goto("https://www.google.com");
        return   googlehomepagePromise
    })
    .then(function(){
            console.log("google home page opened");
    });
