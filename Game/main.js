// variables
var newgame = true
var isless = false
let firstcard = getRandomCard()
let secondcard = getRandomCard()
let cards = [firstcard, secondcard]
let sum = firstcard + secondcard
let allcards = "Cards : "
for (let i = 0; i < cards.length; i++) {
    if (i === cards.length - 1) {
        allcards += (cards[i])

    } else {
        allcards += (cards[i] + " & ")

    }
}
let player = {
    name: "Player1",
    credit: 500
}

// querySelector(we can also use querySelector instead of getElementById)

var message = document.querySelector("#message");
var CARDS = document.getElementById("cards");
var SUM = document.getElementById("sum");
var playbutton = document.getElementById("play");
var newgamebutton = document.getElementById("newgamebutton");
var newcardsbutton = document.getElementById("newcardsbutton");
var credit = document.getElementById("credit");
credit.innerHTML = player.name + " : $" + player.credit;
var addmoney = document.getElementById("addmoneybutton")
// buttons
playbutton.addEventListener("click", Startgame)
newgamebutton.addEventListener("click", NewGame)
newcardsbutton.addEventListener("click", NewCards)
addmoney.addEventListener("click", addMoneyInCredit)

// Functions
function Result() {

    if (sum < 21) {
        CARDS.textContent = allcards
        SUM.innerHTML = "Sum : " + sum
        message.innerHTML = " Do you want to draw a new card?";
        isless = true

    } else if (sum === 21) {
        CARDS.textContent = allcards
        SUM.innerHTML = "Sum : " + sum
        message.innerHTML = " you've got Blackjack!!!";
        player.credit += 200
        credit.innerHTML = player.name + " : $" + player.credit;
        newgame = false
        isless = false

    } else {
        SUM.innerHTML = "Sum : " + sum
        CARDS.textContent = allcards
        message.innerHTML = " you Lose the game!!!(play new game)";
        player.credit -= 100
        credit.innerHTML = player.name + " : $" + player.credit;
        newgame = false
        isless = false
    }
}

function NewCards() {
    if (player.credit > 0) {
        if (isless == true) {
            if (sum < 21) {
                let newcard = getRandomCard()
                cards.push(newcard)
                sum += newcard
                allcards = "Cards : "
                for (let i = 0; i < cards.length; i++) {
                    if (i === cards.length - 1) {
                        allcards += (cards[i])

                    } else {
                        allcards += (cards[i] + " & ")

                    }
                }
                CARDS.textContent = allcards
                SUM.innerHTML = "Sum : " + sum
                Result()
            } else if (sum === 21) {
                message.innerHTML = "you win the game!!!(play new game)";
            } else {
                message.innerHTML = "you Lose the game!!!(play new game)";
            }
        }
    } else {
        alert("you are out of money dude !!!\n Click on + button to get money for free")
        message.innerHTML = " you are out of money :(( "
    }
}

function getRandomCard() {

    let ans = Math.ceil(Math.random() * 13);
    if (ans === 1) {
        ans = 11
    } else if (ans > 10) {
        ans = 10
    }
    return ans;

}

function Startgame() {
    if (player.credit > 0) {
        if (newgame === true) {
            let firstcard = getRandomCard()
            let secondcard = getRandomCard()
            sum = firstcard + secondcard
            cards = [firstcard, secondcard]
            allcards = "Cards : " + cards[0] + " & " + cards[1]
            Result()
            newgame = false
        }
    }
    else {
        alert("you are out of money :((\n Click on + button to get money for free")
        message.innerHTML = " you are out of money :(( "
    }
}


function NewGame() {
    newgame = true
    message.innerHTML = "Press on play button"
    CARDS.innerHTML = "Cards :"
    SUM.innerHTML = "Sum :"
}

function addMoneyInCredit() {
    confirmation = confirm("are you sure for adding money??")
    if (confirmation) {
        player.credit += 500
        credit.innerHTML = player.name + " : $" + player.credit;
    }
}