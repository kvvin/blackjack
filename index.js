let card = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum")
let cardEl = document.getElementById("cards")

let player = {
    name: "Per", chips: 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let rCard = 0
    rCard = Math.floor(Math.random()*13)+1;
    if(rCard === 1){
        return 11
    }
    else if(rCard >10){
        return 10
    }
    else{
        return rCard
    }
} 

function start()
{
    renderGame()
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
}

function renderGame(){
    cardEl.textContent = "Cards: "

    for(let i = 0; i < cards.length; i++){
        
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if(sum <= 20){
        message = "Do you want to draw a new card?"
        
    }
    else if (sum === 21){
        hasBlackJack = true
        message = "You've got a Blackjack!"
        
    }
    else{
        
        isAlive = false
        message = "You're out of the game!"
        
    }

    messageEl.textContent = message
}



function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
    renderGame()
    }
        
}