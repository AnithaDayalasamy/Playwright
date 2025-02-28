function gradeCalc(score)
{
    let grade;

    switch(true){      
        case score >= 90:
            grade='A';
            break;
        case score >= 75:
            grade='B';
            break;
        case score >= 50:
            grade='C';
            break;
        default:
            grade='D';
            break;
        } 
    return grade;   
}
let grade= gradeCalc(90);
console.log(`Student grade is ${grade}`);


