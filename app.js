let a = undefined;
let b = ' ';
let c = !b;

let d = Boolean(a)
console.log(d)          // false เพราะ undefined ถูกแปลงเป็น Boolean
console.log(typeof(d))           

let e = Boolean(b)
console.log(e)          // true เพราะ string แปลงเป็น Boolean
console.log(typeof(e))          

let f = Boolean(c)
console.log(f)          // false เพราะ not string ถูกค่าแล้วแปลงเป็น Boolean
console.log(typeof(f))  
