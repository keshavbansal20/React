const puppeteer = require("puppeteer");
let PDFDocument = require("pdfkit");
let fs = require("fs");
let cTab;
(async function fn(){
    try{
        let browserOpenPromise = puppeteer.launch({
            headless:false,
            defaultViewport:null,
            args:["--start-maximized"]
        });
        let browser = await browserOpenPromise;
        
        let allTabsArr = await browser.pages();
        cTab = allTabsArr[0];
        await cTab.setDefaultNavigationTimeout(0);
        await cTab.goto("https://todoist.com/app/");
        await cTab.waitForSelector('.input[type="email"]');
        await cTab.type('input[type="email"]',"salvatotuckertmp642@gmail.com", {delay:20});
        await cTab.waitForSelector('input[type="password"]');
        await cTab.type('input[type="password"]', '_7*83V_G$MPi_8d',{delay:20});
    
        await cTab.click(".submit_btn.ist_button.ist_button_red.sel_login");

        
        //adding a task
        await cTab.waitForSelector('.plus_add_button');
        await cTab.evaluate(consolefn,".plus_add_button");
        console.log("yes happend");
        // await waitAndClick(".public-DraftStyleDefault-block.public-DraftStyleDefault-ltr");

        await cTab.type(".public-DraftStyleDefault-block.public-DraftStyleDefault-ltr","Eat breakfast",{delay:200});
        await cTab.click('button[class="item_due_selector icon_pill"]');
        await cTab.type('input[placeholder="Type a due date"]',"Every monday",{delay:20});
        await cTab.keyboard.press('Enter');
        await cTab.click(".ist_button.ist_button_red");
        await cTab.click("#filter_inbox");
       let list =   await cTab.evaluate(function() {
            let allTasks = document.querySelectorAll(".task_list_item__content");
            let taskList = [];
            for(let i = 0 ; i < allTasks.length;i++){
                let TaskLeft = document.querySelector(".markdown_content.task_content").innerText;
                let Timing =  document.querySelector(".date.date_future ").innerText;
                taskList.push({TaskLeft , Timing});
                
            }
            return taskList;
        })
       
        let pdfDoc = new PDFDocument;
        pdfDoc.pipe(fs.createWriteStream('Tasklist.pdf'));
        pdfDoc.text(JSON.stringify(list));
        pdfDoc.end();

        await whatsapp(pdfDoc);
    
        
        
        
       


        
      

        
    }
    catch(err){
        console.log(err);
    }
})();


async function whatsapp(pdfDoc){
    try{
        await cTab.goto("https://web.whatsapp.com/");
        await waitAndClick("._1JAUF._1d1OL>._2_1wd.copyable-text.selectable-text");
        await cTab.type("._1JAUF._1d1OL>._2_1wd.copyable-text.selectable-text","Ganesh");
        const fileInput = await waitAndClick("._35k-1._1adfa._3-8er>.matched-text._3-8er");
        await fileInput.uploadFile ("./Tasklist.pdf");
        
    }
    catch(err){
        console.log(err);
    }
}
async function waitAndClick(selector) {
    try {
        await cTab.waitForSelector(selector, { visible: true });
        await cTab.click(selector);
        console.log("done");
    }
    catch (err) {
        return new Error(err);
    }
}

function consolefn(className){
    document.querySelector(className).click();
}