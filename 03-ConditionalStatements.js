function launchBrowser(browserName)
{
    if(browserName="Chrome")
    {
        console.log(`Browser name is ${browserName}`);
    }
    else if(browserName="Edge")
    {
    console.log(`Browser name is ${browserName}`);
    }
    else if(browserName="Mozilla")
    {
    console.log(`Browser name is ${browserName}`);
    }
    else
    console.log(`Browser name is ${browserName}`);
}

launchBrowser("Chrome");
function runTests(){

    switch(testType){
        case'smoke':
        console.log(`TestType  is ${testType}`);
        break;
        case'sanity':
        console.log(`TestType  is ${testType}`);
        break;
        case'regression':
        console.log(`TestType  is ${testType}`);
        break;
        default:
            console.log(`TestType  is Smoke`);
        break     
    }

}

let testType = "sanity"
runTests();


