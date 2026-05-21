// Conditional Statements in JavaScript:
// 1. if statement:
const x=10;
if(x===10){
    console.log('x is 10');
}else if(x>10){
    console.log('x is greater than 10')
}else{
    console.log('x is less than 10');
}

const y=8;
const z=10;
if(y>5 || z>10){
    console.log('X is more than 5 or y is more than 10');
}

// 2. Nested Ternary Statement:
const c=5;
const color=(c>4)?'red':'blue';
console.log(color);

// Nested Ternary Statement:
let day =3;
let greeting=(day===1)?'Start of the Day':
             (day===2)?'Second Day':
             (day===3)?'Midweek':
             (day===4)?'Almost Weekend':
             'Weekend';
console.log(greeting);

// 3. Switch Statement:
let dayName;
day=3;
switch(day){
    case 1:
        dayName='Monday';
        break;
    case 2:
        dayName='Tuesday';
        break;
    case 3:
        dayName='Wednesday';
        break;
    case 4:
        dayName='Thursday'; 
        break;
    case 5:
        dayName='Friday';
        break;  
    case 6:
        dayName='Saturday';
        break;
    case 7:
        dayName='Sunday';
        break;
    default:
        dayName='Invalid day';
}
console.log(dayName);