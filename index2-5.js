/** 基本型別 */
// 數字 number
let n1 = 5;
let n2 = 1.1;
let n3 = -10;

// 字串 string

let s1 = '郭俊良';
let s2 = "0921-xxxx";
let s3 = 'This is a book';
let s4 = '\'國文\' 60';
// 樣板字串 Template  string
let s5 = `${s1}： 您好
歡迎光臨
請多多指教！
`;
// console.log(s5);

// 布林 boolean
// console.log(10>5);
// console.log(5>10);

// undefined
let u;
// console.log(u);

// 存取常未定義 屬性 會回傳 undefined
let u1={};
// console.log(u1.name);

let u2 = function(x,y){
  x+y;
};
// console.log(u2(5,10));

// null
let nu1 = null;
console.log(nu1);

// array
let arr = [1,2,3,4,5,6,7,8,9,10];

// object
let obj = {
  name: '郭俊良',
  age: 30,
  addr: '台南市西門路12號'
}

// 傳址指派
let obj1 = obj;

obj1['name'] = "123";
console.log(obj)
