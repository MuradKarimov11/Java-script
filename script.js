/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */


/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

let numberOfFilms;
function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
 
function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b; 
            console.log('done');
        } else {
            console.log('error');
            i--;
        }   
    }
}

rememberMyFilms();

function detecPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('Вы классический зритель')
    } else if (personalMovieDB.count >= 30)  {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detecPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres () {
    for  (let i = 1; i <= 3; i++) {
        const genre = prompt("Ваш любимый жанр под номером ${номер по порядку}");
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();



// const hamburger = 5;
// const fries = 0;

if (hamburger && fries) {
    console.log('Я сыт');
}

console.log((hamburger && fries));

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries ===3 && nuggets) {
    console.log('Все сыт');
} else {
    console.log('mi uxodim');
}


function showFirstMessage (text) {
    console.log(text);
    
}

showFirstMessage('Hello World!');

function calc (a, b) {
    return (a + b);
}

console.log(calc(5, 90));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);


const logger = function () {
    console.log('Hello');
};

logger();

const kalc = (a, b) => {return a + b};
const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert (amount, curr) {

    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);

convert(500, eurCurr);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('Done')
}

test();

function doNothing () {};
console.log(doNothing() === undefined);

function sayHello(name) {
    return `Привет, ${name}!`;
}

sayHello('Murad');



// const str = "test";
// const mes = [1, 3, 5, 6, 7];

// console.log(str.length);
// console.log(mes.length);
// console.log(str[2] = 'd');
// console.log(str.toUpperCase());


// const big = 'MuraD';

// console.log(big.toLowerCase());

// const fruit = 'Some fruit';
// console.log(fruit.indexOf("fruit"));

// const logg = "Hello world";
// console.log(logg.slice(6));


// const mum = 12.2;

// console.log(Math.round(mum));

// const bas = '12.2px';
// console.log(parseInt(bas));
// console.log(parseFloat(bas));




