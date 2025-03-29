import {defineConfig, chromium, expect, test} from "@playwright/test";


test(`Assignment: 1 Create Lead `, async ({  }) => {

    //Page Context
    const browserInstance1= await chromium.launch({headless: false,channel: "msedge"});
   
    const browserContext1 = await browserInstance1.newContext();
   
    const page = await browserContext1.newPage();
    //Const declaration
    const userName="anithad1989589@agentforce.com"
    const password="March@12"
    const url="https://login.salesforce.com/"

    //Launching salesforapp
    await page.goto(url)
    //Locate username field and type in the value
    await page.locator(`input[id="username"]`).fill(userName)
    //locate password ele and type in the value
    await page.locator("#password").fill(password)
    //click on the login button
    await page.locator("#Login").click()
    //verify the title
    const title = await page.title()
    await page.waitForTimeout(5000);
    console.log(title)

    //Click on the toggle menu button from the left corner 
    await page.locator('//button[@title="App Launcher"]').click()
    //Click on View All App
    await page.locator('//button[@aria-label="View All Applications"]').click()
    //Create new lead
    await page.locator('//p[text()="Leads"]').click()
    await page.locator('//button[text()="New"]').click()
    await page.locator('(//label[text()="Salutation"]/following::button)[1]').click();
    await page.waitForTimeout(2000);
    await page.locator("//span[text()='Ms.']").click();

    await page.getByPlaceholder('Last Name').fill("Anitha");
    await page.locator("//input[@name='Company']").click();
    await page.locator("//button[text()='Save']").click();
   
})


test('Assignment: 2 Edit Lead ', async ({ page }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main")
    //Locate username field and type in the value
    await page.locator(`input[id="username"]`).fill("demoSalesManager")
    //locate password ele and type in the value
    await page.locator("#password").fill("crmsfa")
    //click on the login button
    await page.locator(".decorativeSubmit").click()
    //verify the title
    const title = await page.title()
    console.log(title)
    await page.waitForTimeout(3000)
    //locate the element with text
    await page.locator("text=CRM/SFA").click()
    await page.locator("//a[text()='Create Lead']").click();
    await page.locator("#createLeadForm_companyName").fill("BOA");
    await page.locator("#createLeadForm_firstName").fill("Anitha");
    await page.locator("#createLeadForm_lastName").fill("D");
    await page.locator(".smallSubmit").click();
    await page.waitForTimeout(4000)
   
    const leadid: string= await page.locator("#viewLead_companyName_sp").innerText();
   
    const extractedid= leadid.slice(-6,-1);
    console.log(leadid);
    console.log(extractedid);
    await page.locator("//a[text()='Edit']").click();
    await page.locator("#updateLeadForm_companyName").fill("bofa");
    await page.locator("//input[@value='Update']").click()
    let leadidxpath = `//a[text()="${extractedid}"]`;

    await page.locator(leadidxpath).isVisible();

})




test(`Assignment: 3 Create Individuals `, async ({  }) => {


    const browserInstance1= await chromium.launch({headless: false,channel: "msedge"});
   
    const browserContext1 = await browserInstance1.newContext();
   
    const page = await browserContext1.newPage();
//Const declaration
    const userName="anithad1989589@agentforce.com"
    const password="March@12"
    const url="https://login.salesforce.com/"

    //Launching salesforapp
    await page.goto(url)
    //Locate username field and type in the value
    await page.locator(`input[id="username"]`).fill(userName)
    //locate password ele and type in the value
    await page.locator("#password").fill(password)
    //click on the login button
    await page.locator("#Login").click()
    //verify the title
    const title = await page.title()
    await page.waitForTimeout(5000);

    console.log(title)

    //Click on the toggle menu button from the left corner 
    await page.locator('//button[@title="App Launcher"]').click()
    await page.waitForTimeout(3000);
    await page.locator('//button[@aria-label="View All Applications"]').click()
    await page.waitForTimeout(3000);

    await page.locator('//p[text()="Individuals"]').click()
    await page.waitForTimeout(2000);
    await page.locator('//a[@title="New"]').click();
    
   
    await page.locator("//span[text()='Salutation']/following::div[1]").click();
    await page.waitForTimeout(2000);
   await page.locator("//a[text()='Ms.']").click();
    const lastname= "Gunta1";
    await page.getByPlaceholder('Last Name').fill(lastname);

    await page.locator("(//span[text()='Save']/parent::button)[2]").click()
    await page.waitForTimeout(3000);
    await expect(page.locator("(//div[@title]/span[@class='uiOutputText'])[2]")).toHaveText(lastname);
    })



test.only(`Assignment: 4 Edit Individuals`, async ({  }) => {


    const browserInstance1= await chromium.launch({headless: false,channel: "msedge"});
   
    const browserContext1 = await browserInstance1.newContext();
   
    const page = await browserContext1.newPage();
    //Const declaration
    const userName="anithad1989589@agentforce.com"
    const password="March@12"
    const url="https://login.salesforce.com/"

    //Launching salesforapp
    await page.goto(url)
    //Locate username field and type in the value
    await page.locator(`input[id="username"]`).fill(userName)
    //locate password ele and type in the value
    await page.locator("#password").fill(password)
    //click on the login button
    await page.locator("#Login").click()
    //verify the title
    const title = await page.title()
    await page.waitForTimeout(5000);

    console.log(title)

    //Click on the toggle menu button from the left corner 
    await page.locator('//button[@title="App Launcher"]').click()
    await page.locator('//button[@aria-label="View All Applications"]').click()
    await page.locator('//p[text()="Individuals"]').click()
    await page.locator('//input[@ name="Individual-search-input"]').fill('Vikas')

    await page.keyboard.press('Enter')
    await page.waitForTimeout(3000);

    await page.locator("//span[text()='Show Actions']/parent::span/parent::a").click();
    await page.locator('//a[@title="Edit"]').click();
    
   
    await page.locator("//span[text()='Salutation']/following::div[1]").click();
    await page.waitForTimeout(2000);
    await page.locator("//a[text()='Ms.']").click();
    await page.waitForTimeout(3000);
     const firstname= "Gunta";
     await page.getByPlaceholder('First Name').fill(firstname);

     await page.locator("(//span[text()='Save']/parent::button)[2]").click();
  
    
})


