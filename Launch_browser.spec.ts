import { chromium,firefox,test } from "@playwright/test";

test("To Launch a browser", async() =>{
    const browserInstance = await firefox.launch({headless: false});

    const browserContext = await browserInstance.newContext();

    const page = await browserContext.newPage();

    await page.goto(" https://www.flipkart.com");

    console.log(`The title of the page is ${await page.title()}`); 

    console.log(`The URL of the page is ${page.url()}`); 


    const browserInstance1= await chromium.launch({headless: false,channel: "msedge"});

    const browserContext1 = await browserInstance1.newContext();

    const page1 = await browserContext1.newPage();

    await page1.goto(" https://www.redbus.in/");

    console.log(`The title of the page is ${await page1.title()}`); 

    console.log(`The URL of the page is ${page1.url()}`); 

    

})