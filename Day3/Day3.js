// For loop
for(let i=0; i<10; i++){
    console.log(i);
}

for(let i=0; i<=10; i++){
    console.log(`For loop Number: ${i}`);
}

// use of loop in Arrays
const todos=[
    {
        id:1,
        text:'Take out trash',
        isCompleted: true

    },
    {
        id:2,
        text:'Meeting with boss',
        isCompleted: true
    },
    {
        id:3,
        text:'Dentist appt',
        isCompleted: false    
    }
];
for(let i=0; i<todos.length; i++){
    console.log(todos);
    //console.log(todos[i].text);
}

// while Loop
let i = 0;
while(i<10){
    console.log(`While Loop Number: ${i}`);
    i++;
}

// forEach Loop:
const todos1=[
    {
        id:1,
        text:'Take out trash',
        isCompleted: true

    },
    {
        id:2,
        text:'Meeting with boss',
        isCompleted: true
    },
    {
        id:3,
        text:'Dentist appt',
        isCompleted: false    
    }
];
todos1.forEach((todo1)=>{
    console.log(todo1);
});

let arr=[1,2,3,4,5];
arr.forEach((arr)=>{
    console.log(arr);
});

//map loop:
const todos2=[
    {
        id:1,
        text:'Take out trash',
        isCompleted: true

    },
    {
        id:2,
        text:'Meeting with boss',
        isCompleted: true
    },
    {
        id:3,
        text:'Dentist appt',
        isCompleted: false    
    }
];
const todoText=todos2.map((todo)=>{
    return todo.text;
})
console.log(todoText);

// filter loop:
const todos3=[
    {
        id:1,
        text:'Take out trash',
        isCompleted: true

    },
    {
        id:2,
        text:'Meeting with boss',
        isCompleted: true
    },
    {
        id:3,
        text:'Dentist appt',
        isCompleted: false    
    }
];
const todoCompleted=todos.filter((todo)=>{
    return todo.isCompleted === true;
});
console.log(todoCompleted);

// do while loop:
let a=0;
do{
    console.log(a);
    a++;
}while(a<5);