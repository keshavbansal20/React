
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
        let emailWillTypedpromise = cTab.type("input[name='username']" , "cawav12570@kindbest.com" , {delay:20});
        return emailWillTypedpromise;
    }).then(function(){
        let passwordWillTypedpromise = cTab.type("input[name='password']" , "qwerty123456" , {delay:20});
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
        let questionWillBeSolvedPromise = questionSolver(linkArr[0] , 1);
        
    }).then(function(){
        console.log("question solved");
    }).then(function(err){
        reject(err);
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
let {answers} = require("./codes");
function questionSolver(url ,idx){
    return new Promise(function(resolve , reject){
        let fullLink = `https://www.hackerrank.com${url}`;
        let goToQuestionPagePromise = cTab.goto(fullLink);
        goToQuestionPagePromise
        .then(function(){
            let waitForCheckBoxAndClick  = waitAndClick(".custom-input-checkbox");
            return waitForCheckBoxAndClick;
        }).then(function(){
            let waitForTextBox = cTab.waitForSelector(".custominput" , {visible:true});
            return waitForTextBox;
        }).then(function(){
            let codeWillBeAddedPromise =cTab.type(".custominput" , answers[idx] , {delay:5});
            return codeWillBeAddedPromise;
        }).then(function(){
            let ctrlWillBeDownPromise = cTab.keyboard.down("Control");
            return ctrlWillBeDownPromise;
        }).then(function(){
            let aWillBePressedPromise = cTab.keyboard.press("a");
            return aWillBePressedPromise;
        }).then(function(){
            let xWillBePressedPromise = cTab.keyboard.press("x");
            return xWillBePressedPromise;
        }).then(function(){
            let pointerWilBeClicked = cTab.click(".monaco-editor.no-user-select.vs");
            return pointerWilBeClicked;
        }).then(function(){
            let aWillBePressedOnpinter = cTab.keyboard.press("a");
            return aWillBePressedOnpinter;
        }).then(function(){
            let codePastePromise = cTab.keyboard.press("v");
            return codePastePromise;
        }).then(function(){
            let submitWillClickedPromise = cTab.click(".pull-right.btn.btn-primary.hr-monaco-submit");
            return submitWillClickedPromise;
        })
        // ctrl A
            // ctrl X
            // Code editor code paste-> 
        .then(function(){
            resolve();
        }).catch(function(err){
            reject(err);
        })

    })
}
     // dynamic site -> id change

    // create new promise -> wait ->