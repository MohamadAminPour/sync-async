////////////////////////sync//////////////////////
// console.log('1');
// console.log('2');
// setTimeout(() => {
//     console.log('3');
// }, 3000);
// console.log('4');
// console.log('5');

////////////////////////async//////////////////////

// function FirstLog() {
//     console.log('1');
//     console.log('2');
// }

// function MidleLog(CallBack) {
//     setTimeout(() => {
//         console.log('3');
//         CallBack()
//     }, 3000);
// }

// function LastLog() {
//     console.log('4');
//     console.log('5');
// }

// FirstLog()
// MidleLog(LastLog)

//////////////////////example////////////////////////

// let Library = [
//     { id: 1, name: 'shahname', price: 350000 },
//     { id: 2, name: 'ghese ma masal shod', price: 480000 },
//     { id: 3, name: 'hafaz', price: 820000 },
// ]

// function AddBook(Name, Price, CallBack) {
//     let NewBook = {
//         id: Library.length + 1,
//         name: Name,
//         price: Price
//     }


//     setTimeout(() => {
//         Library.push(NewBook)
//         CallBack()
//     }, 3000);
// }

// function LogBook() {
//     console.log(Library);
// }

// AddBook('mmd', 231000, LogBook)

let inputElem = document.querySelector('input')
let h1Elem = document.querySelector('h1')



function copy(txt) {
    window.navigator.clipboard.writeText(txt)
}
h1Elem.addEventListener('click',function(){
    copy(h1Elem.innerHTML)
})