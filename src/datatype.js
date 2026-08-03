/**
Data Type

Primitive Data Type
1. String
2. Number 
3. Boolean
4. Undefined
5. null

*/

var str = "hello";
var num = 2;
var bol = true;

console.log(str);
console.log(num);
console.log(bol);

// FYI : hello has a different color
// FYI : 2, true has a different color
// TODO : var, let , const

// JavaScript is Dyanmically types languauge

console.log("=========== Wednesday, July 29, 2026 4:10:00 PM ===========");
console.log(typeof (str));
console.log(typeof (num));
console.log(typeof (bol));

console.log("=========== Wednesday, July 29, 2026 4:12:24 PM ===========");
var d = null;
console.log(d);
console.log(typeof (d));

console.log("=========== Wednesday, July 29, 2026 4:15:09 PM ===========");
var e = "";
console.log(e);
console.log(typeof (e));


// DataType Size ? Do we have memory size ???
console.log("=========== Wednesday, July 29, 2026 4:26:06 PM ===========");
var f;
console.log(f);
console.log(typeof (f));

console.log("=========== Wednesday, July 29, 2026 4:28:54 PM ===========");
console.log("QUIZ ::=====> ");
console.log(typeof null); // OBJECT 
console.log(typeof typeof null); // STRING 
console.log(typeof typeof undefined); // STRING 

console.log("=========== Wednesday, July 29, 2026 4:33:43 PM ===========");
console.log("=========== Implicit Type Coercion ===========");
var a = 2;
var b = "2";
console.log(a == b);
console.log(b == a);
console.log("=========== String and Number Coercion Rule(==)  ===========");
console.log("=========== String and Number (===)  ===========");
console.log(a === b);
console.log(b === a);

console.log("Explict Coercion  ===========");
console.log(+"2");
console.log(typeof +"2");
console.log(+"abc");
console.log(typeof +"abc");