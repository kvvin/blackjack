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

function reset(){
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    
}

function start()
{
    reset()
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    playerEl.textContent = player.name + ": $" + player.chips
    
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
        player.chips += 10
        
        
    }
    else{
        
        isAlive = false
        message = "You're out of the game!"
        player.chips -= 20
        if (player.chips <= 0) {
            player.chips = 0;
            message = "You've run out of chips! Refresh the page"
        }
        
        
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