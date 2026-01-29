const myPromise1 = new Promise((resolve,reject) => {
    setTimeout(resolve,1000,"john");
});
const myPromise2 = new Promise((resolve,reject) => {
    setTimeout(resolve,2000,"Doe");
});
// Promise.all([myPromise1,myPromise2]).then((x) => {
//     myDisplay(x);
// });
 function myDisplay(some){
    console.log(some);
};

Promise.allSettled([myPromise1,myPromise2]).then((result) => 
    result.forEach((x) => myDisplay(x.status)),
);

