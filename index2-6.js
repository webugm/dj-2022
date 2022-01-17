// 算術運算子: +、-、*、/、%、**
let n1 = 10;
let n2 = 5;

// console.log(n1-n2);
// console.log(n1+n2);
// console.log(n1*n2);
// console.log(n1/n2);
// console.log(-n1/'a');

// 圓面積計算
let radius = 5 ;
let area = 3.14 * radius ** 2
// console.log(area);

// 餘數計算
let arr = [1,2,3,4,5,6,7,8,9,10];
for(let i = 0; i < arr.length; i++){
  // console.log(arr[i] % 2);
}

// 二、字串運算子：+
let name = '郭俊良'
let age = 30;

let s1 = name + '目前為 ' + age + ' 歲';
// console.log(s1)

// 三、遞增 / 遞減運算子：++、--
let i = 0;
i++;
// console.log(i);
i++;
// console.log(i);

// 四、比較運算子：==、!=、<、<=、>、>=、===、!==

let a = 5;
let b = '5';

// 五、邏輯運算子：&&、||、!
console.log(a == b);
console.log(a === b);

// 六、條件運算子：?:
let c = 10;
let d = c >= 60 ? '及格' : '不及格';
console.log(d);