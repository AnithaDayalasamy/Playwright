function isPalindrome(inputstring)
{
    inputstring= inputstring.toLowerCase();
    let revString="";
    for(let i=inputstring.length-1;i>=0;i--)
    {

        revString += inputstring[i];
        
    }
    console.log("revString"+revString)

    revString=revString.toLowerCase();

    if(inputstring===revString)

    {console.log(`${inputstring} and ${revString} are Palindrome`)}
    else
    {
        console.log(`${inputstring} and ${revString} are not Palindrome`)
    }
}

isPalindrome("Mom");