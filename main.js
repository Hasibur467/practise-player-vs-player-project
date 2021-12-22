(function init(){
    const inputElm = document.querySelector('#input');
const formElm = document.querySelector('form');
const winScoreElm =document.querySelector('.winScore')
const p1ScoreElm=document.querySelector('.p1Score')
const p1BtnElm=document.querySelector('.p1Btn')
const p2ScoreElm=document.querySelector('.p2Score')
const p2BtnElm=document.querySelector('.p2Btn')
const resetBtnElm=document.querySelector('.resetBtn')

//data layer
//view layer
let winScore =20
let p1Score=0
let p2Score=0
let turn='Player 1'

winScoreElm.textContent=winScore
p1ScoreElm.textContent=p1Score
p2ScoreElm.textContent=p2Score

function generateRanNum(max){
 return Math.floor( Math.random() * max +1)
}

formElm.addEventListener('submit',e =>{
    e.preventDefault()
    const inputValue = +inputElm.value
    //validation
    if(inputValue==='' ||inputValue<1){
        if(!document.querySelector('.invalid-input')){
        formElm.insertAdjacentHTML('beforebegin','<p class="invalid-input">Please input valid number</p>')
    }
}   else {
    if(document.querySelector('.invalid-input')){
        document.querySelector('.invalid-input').remove()
    }
    //seting data layer
    winScore = +inputElm.value
    //view data layer
    winScoreElm.textContent= winScore
    //clear the input
    inputElm.value = ''
    initialPlayState()
    }
    
}) 
p1BtnElm.addEventListener('click',e =>{
   if(turn==='Player 1'){
    p1Score = generateRanNum(winScore)
    p1ScoreElm.textContent= p1Score
    turn = 'Player 2'
    p1BtnElm.setAttribute('disabled','disabled')
    p2BtnElm.removeAttribute('disabled')
    //checke wining score
    checkWinner()

    }
})
function checkWinner(){
    const isP1Winner= winScore===p1Score
    const isP2Winner= winScore===p2Score
    if(isP1Winner || isP2Winner){
        p1BtnElm.setAttribute('disabled','disabled')
        p2BtnElm.setAttribute('disabled','disabled')

    }
    displayWinner(isP1Winner,isP2Winner)
}
function displayWinner(p1WinState,p2WinState){
    if(p1WinState){
        formElm.insertAdjacentHTML('beforebegin','<p class="winnerMsg">Player1 is winner</p>')
    }else if(p2WinState){
        formElm.insertAdjacentHTML('beforebegin','<p class="winnerMsg">Player 2 is winner</p>')
    }
}

p2BtnElm.addEventListener('click',e =>{
    if(turn==='Player 2'){
    p2Score=generateRanNum(winScore)
    p2ScoreElm.textContent= p2Score
    turn = 'Player 1'
    p2BtnElm.setAttribute('disabled','disabled')
    p1BtnElm.removeAttribute('disabled')
    }
})
resetBtnElm.addEventListener('click',e =>{
    winScore =20
    initialPlayState()
})
function initialPlayState(){
    p1Score=0
    p2Score=0
    turn='Player 1'
    winScoreElm.textContent=winScore
    p1ScoreElm.textContent=p1Score
    p2ScoreElm.textContent=p2Score
    p1BtnElm.removeAttribute('disabled')
    p2BtnElm.removeAttribute('disabled')
    //reset winning msg
    if(document.querySelector('.invalid-input')){
        document.querySelector('.invalid-input').remove()

    }
    
}
})()

