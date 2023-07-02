if (6 > 5) {
    console.log('ok');
} else {
    console.log('no');
}



// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('mnovo');
// } else {
//     console.log('ok');
// }

// (num === 50) ? console.log('ok') : console.log('Error');

const num = 50;
switch (num) {
    case 49:
        console.log('neverno');
        break;
    case 100:
        console.log('neverno');
        break;
    case 51:
            console.log('verno');
            break;
    default:
        console.log('ne v etot raz');
        break;
}