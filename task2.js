
// let x = function () {
//     console.log('Привет');
// };

// //x();

// let y = x;
// console.log(y);

// y();

// function clg(fn) {
//     console.log(fn());
// }

// function x() {
//     return 2 * 2;
// }
// clg(x);

// let words = myStr.split(" ");
// console.log(words);

// function changeWords(str) {
//     let result = str.split(' ');
//     return result;
// }

// let myStr = "Привет: мир! Как твои дела?";

// console.log(changeWords(myStr));


const options = {
    name: 'test',
    height: 1024,
    width: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

console.log(Object.keys(options).length);

//console.log(options.name);

// delete options.width;

// console.log(options);

let counter = 0;

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`); 
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter);


const uze = {
    age: 24,
    name: 'Murad',
    post: 'admin',
    hobbi: {
        sport: 'volebol',
        book: 'Darvin'
    },
    makeTest: function () {
        console.log('Test');
    }
};

uze.makeTest();

console.log(Object.keys(uze).length);


const arr = [100, 782, 93, 68, 48];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});


//arr.pop();
// arr.push(7);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

for (let value of arr) {
    console.log(value);
} 

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join('; '));

let a = 5,
    b = a;

b = b + 5;
console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);


function copy (mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 17,
    i: 20
};

console.log(Object.assign(numbers, add));


const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'jdcj ff bj fn';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ["a", "b"];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newQ = {...q};
console.log(newQ);
console.log(q);


let nnn = "some";
let nnnObj = new String(nnn);


console.log(typeof(nnn));
console.log(typeof(nnnObj));

const soldier = {
    health: 400,
    armor: 100
};

const jonh = {
    health: 100
};

jonh.__proto__ = soldier;
console.log(jonh.armor);