/*
function sumBy(a){
    return function(b){
        return a + b;
    }
}
var s = sumBy(2);
s(1);
*/

/*
setTimeout(() => {
    console.log("Executed");
}, 2000);
*/

/*
var a = setInterval(() => { console.log("setInterval") }, 3000);
console.log("Last Step");
*/

/*
for (var i = 0; i < 10; i++) {
    (function (x) {
        setTimeout(() => {
            console.log(x);
        }, 2000);
    })(i);
}
*/

// (function () {})() //self-calling function
// +function(){}()

var user = {};
/*
function serverCall(cb) {
    setTimeout(() => {
        user = { name: "Hamza" };
        cb();
    }, 3000)
}
serverCall(() => {
    newsfeed(()=>{
        getComments( () =>{
            jbj
        })
    })
    console.log("userName: ", user.name);
});
*/

var p = new Promise((resolve, reject) => {
    setTimeout(() => {
        user = { name: "Hamza" };
        resolve("Test");
        // reject("Test");
    }, 3000)
});

p.then(
    (response) => {
        console.log(response);
        console.log(user)
        return "test2"
    },
    (error) => {
        console.log("Reject: ", error)
    }
).then((data) => {
    console.log(data);
})
    .then((data) => {
        console.log(data);
    })

// TODO: ** ASSIGNMENTS **
//------ PROGRESSIVE WEB APP -------
//------ PROMISES -------