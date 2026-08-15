console.log(" DAY-2 Function   ======================");

// Return type 
// Parameter datatype
// function f1(d){
//   console.log(d());
//   console.log(d);
//   console.log(typeof (d));
// }

// Approach 1
//f1(10);

       
// f1(10.0); // What Happened to Decimal Value ??
// f1("Aman");
// f1("null");
// f1(null);
// f1(nan); // FAILING 


// // Approach 2 
// f1(function(){
//   console.log("Inside the Function");
// })



//console.log("=========== Thursday, August 13, 2026 8:29:44 PM ===========");
// What is Undefined ? Signifinac of it

// function a(){}
// var d = a();
// console.log(d);
// console.log(typeof d);



// function a(){ return 1}
// var d = a();
// console.log(d);
// console.log(typeof d);

// console.log("=========== Thursday, August 13, 2026 8:34:26 PM ===========");

// function a(){
//    return function(){
//     console.log("Returning a Function");
//    }
//   }

// var d = a();
// console.log(d);
// console.log(typeof d);


console.log("Object Creation   ======================");

var obj1 = {};
var obj2 = new Object();


var dog = {
  name: "pablo",
  breed: "lab"
}
// Why do we have 2 Way to fetch the same value ???
console.log(dog);
console.log(dog.name);
console.log(dog["name"]);

var k = "name";
console.log(dog.k);
console.log(dog["k"]); // Invalid Way
console.log(dog[k]); // 

