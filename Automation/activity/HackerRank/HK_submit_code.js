const puppeteer = require("puppeteer");

let cTab;
let browseropenPromise = puppeteer.launch({
    headless: false , 
    defaultViewport: null , 
    args:["--start-maximized"]
})

browseropenPromise
    .then(function(browser){
        let alltabsArrpromise = browser.pages();
        return alltabsArrpromise;
    }).then(function (allTabsArr){
        cTab = allTabsArr[0];
        let visitLoginpagePromise = cTab.goto("https://www.hackerrank.com/auth/login");
        return visitLoginpagePromise;
    }).then(function (visitPage){
        console.log(visitPage);
        let emailWillTypedpromise = cTab.type("input[name='username']" , "cawav12570@kindbest.com" , {delay:200});
        return emailWillTypedpromise;
    }).then(function(){
        let passwordWillTypedpromise = cTab.type("input[name='password']" , "qwerty123456" , {delay:200});
        return passwordWillTypedpromise;
    }).then(function(){
        let loginPromise = cTab.click("button[data-analytics='LoginPassword");
        return loginPromise;
    }).then(function(){
        let IpKitClickePromise = waitAndClick(".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled");
        return IpKitClickePromise;
    }).then(function(){
        let warmUpPagePromise = waitAndClick("a[data-attr1='warmup']");
        return warmUpPagePromise;
    }).then(function(){
        let waitForQuestions = cTab.waitForSelector("a[data-analytics='ChallengeListChallengeName']", { visible: true });
        return waitForQuestions;
    }).then(function(){
        function ConsoleWalaFn(){
            let allElem = document.querySelectorAll("a[data-analytics='ChallengeListChallengeName']");
            let linkArr = [];
            for(let i =0 ; i < allElem.length ;i++){
                linkArr.push(allElem[i].getAttribute("href"));
            }
            return linkArr;
        }
        let linkArrPromise = cTab.evaluate(ConsoleWalaFn);
        return linkArrPromise;
    }).then(function(linkArr){
        console.log(linkArr);
    })


function waitAndClick(selector){
    return new Promise(function(resolve , reject){
        let waitForElementPromise = cTab.waitForSelector(selector , {visible:true});
        waitForElementPromise.then(function(){
           let clickPromise =  cTab.click(selector);
           return clickPromise;
        }).then(function(){
            resolve();
        }).catch(function(){
            reject(err);
        })

    })
}

     // dynamic site -> id change

    // create new promise -> wait ->