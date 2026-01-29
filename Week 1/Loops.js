//for loop
// for (let i = 0;i < 5;i++){
//     console.log(i);
// }

//for loop on array
// const colors = ['red','pink','blue','orange','yellow'];
// for (let i = 0;i < colors.length;i++){
//     console.log(colors[i]);
// }

// // Loop scope - if i defined inside loop then its visible within the loop
// let i = 0;
// for (i = 0;i < 5; i++){
//     console.log(i);
// }
// console.log(i);

//while loop
// let i = 0;
// while(i < 5){
//     console.log(i);
//     i++;
// }

//do while loop
// do{
//     console.log(i);
//     i++;
// }while(i < 5);

// for loop with 2nd expression only
// let i = 0;
// for(;i < 5;){
//     console.log(i);
//     i++;
// }

// break in for loop - it will stop loop at given expressiong gets true
// for(let i = 0;i < 5;i++){
//     if(i == 3){
//         break;
//     }
//     console.log(i);
// }

//lable to break loop
// loop1 : for(let i = 0;i < 5;i++){
//     loop2 : for(let j = 0;j < 5;j++){
//         if(i == 2){
//             break loop1;
//         }
//         console.log(j);
//     }
// }

//break block after specified position
// const cars = ["BMW","AUDI","WV","Skoda"];
// const c =[]
// list : {
//     console.log(cars[0]);
//     console.log(cars[1]);
//     break list;
//     console.log(cars[2]);
//     console.log(cars[3]);
// }

// continue - to skip current interactio in loop
// for (let i = 0;i < 5 ; i++){
//     if(i === 2){
//         continue; //skip index 2
//     }
//     console.log(i);
// }

// continue with statement label
loop1:for(let i = 0;i < 5;i++){
    loop2:for(let j = 0;j < 5;j++){
        if(i === 1){
            continue loop1; // skip index 1 of loop1
        }
        console.log(i);
    }
}