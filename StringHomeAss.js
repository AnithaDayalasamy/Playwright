//Task 1
let str="Are you happy today?";
let splitbyspace =str.split(" ");
let lastword=splitbyspace[splitbyspace.length-1]
console.log(`String is ${str}`);
console.log(`Splitted string is ${splitbyspace}`);
console.log(`lastword is ${lastword}`);


//Task 2
let str1="This a String Home Assignment";
let splitbyspace1 =str1.split(" ");
let lastword1=splitbyspace1[splitbyspace1.length-1]
let lastwordlenght=lastword1.length;
console.log(`String is ${str1}`);
console.log(`Splitted string is ${splitbyspace1}`);
console.log(`length of ${lastword1} is ${lastwordlenght}`);

//Task 3

function isAnagram(string1, string2)
{
    let Str1= string1;
    let Str2= string2;
    processedstr1=Str1.toUpperCase();
    processedstr2=Str2.toUpperCase();
    console.log(Str1.length);
    console.log(Str2.length);
    
    
    if (Str1.length===Str2.length){
        if(processedstr1.split('').sort().join()=== processedstr2.split('').sort().join())
        {
        console.log(`given string ${string1} and ${string2} are anagram`);
        }
    }
    else{
    console.log(`given string ${string1} and ${string2} are not anagram`);
    }


}
isAnagram("Listen","Silent");
