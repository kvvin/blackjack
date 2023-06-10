let firstCard = 5
let secondCard = 6

let cards = [firstCard,secondCard]

let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true

let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum")
//let sumEl = document.querySelector("#sum")
let cardEl = document.getElementById("cards")

function start()
{
    renderGame()
}

function renderGame(){
    cardEl.textContent = "Cards: " + cards[0] + " " + cards[1]
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
    let newCard = 5
    sum += newCard
    renderGame()
        
}