'use strict'

const _ = document,
cols = Array.from(_.querySelectorAll('.board > span')),
reset = _.querySelector('#reset')
let cur = true
let arr = new Array(9).fill(null)
const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
function event(can) {
	reset.addEventListener('click', fnreset)
    for(let col of cols)
    if(can)
    col.addEventListener('click', play)
    else
    col.removeEventListener('click', play)
}
event(true)
function play(e) {
    const __ = e.target
    if(!__.innerHTML){
    cur = !cur
    __.innerHTML = cur ? '<h1 name="O">O</h1>' :  '<h1 name="X">X</h1>'
    move(parseInt(__.id.split(/\D+/g)[1]), __.childNodes[0].getAttribute('name'))
}
}

function move(ind, sign) {
    arr[ind] = sign
    console.log(arr)

for (let i = 0; i < wins.length; i++) {
    let [a, b, c] = wins[i] 
    if(cmp(arr[a], arr[b], arr[c])){
        console.log(sign, ' wins')
        event(false)
        cols[a].classList.add('win')
        cols[b].classList.add('win')
        cols[c].classList.add('win')
    }
}
}
function cmp(a, b, c) {
    if(a && b && c)
    return (a === b) && (a === c) && (b === c)
}

function fnreset() {
    for(let col of cols){
        col.classList.remove('win')
        col.innerHTML = ''
    }
    arr = new Array(9).fill(null)
    event(true)
}
//
//.tabel {
//    width: 480px;
//    height: 480px;
//    background: #76AFD6;
//    border-radius: 100%;
//    border: 1px solid #0D152B;
//    box-shadow: -2px 20px 0 -3px #4283C4, -20px 20px #0D152B;
//    flex-direction: column;
//}
//
//.board {
//    width: 369.2307692308px;
//    height: 369.2307692308px;
//    background: #D3E2EA;
//    border-radius: 20px;
//    border: 1px solid #0D152B;
//    box-shadow: -10px 5px 0px -2px #192852;
//    display: grid;
//    grid-template-rows: repeat(3, 1fr);
//    grid-template-columns: repeat(3, 1fr);
//    grid-gap: 8px;
//    padding: 12px;
//}
//
//.board > span {
//    background: #76AFD6;
//    color: #fff;
//    font-size: 4em;
//    padding-left: 9px;
//    padding-top: 6px;
//    text-align: center;
//    border: 2px solid #0D152B;
//    border-radius: 5px;
//    cursor: pointer;
//    transition: all 0.2s ease;
//    box-shadow: -1.2px 2px 0px 0px #141D4C;
//}
//.board > span:hover {
//    background: #6aa8d2;
//}
//.board > span:active {
//    box-shadow: -1.2px 7.4px 0px -2.5px #141D4C;
//}
