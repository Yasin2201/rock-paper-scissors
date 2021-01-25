let userScore = 0;
let compScore = 0;
let buttons = document.querySelectorAll('button');

//function locks userPlay buttons
function endGame() {
    buttons.forEach((button) => {
        button.disabled = true 
    });
}

//function uses the button.id as users choice
function userPlay() {
    let userChoice = document.querySelectorAll('button')
    
    userChoice.forEach((button) => {
        button.addEventListener('click', () => {
        console.log(button.id);
        });
    });
}

function computerPlay() {
    let compChoice = ["rock", "paper", "scissors"];
    let compMove = compChoice[Math.floor(Math.random()*compChoice.length)];
    return compMove;
}

//function plays the game and compare users choice vs computers to determine results
function game(user) {
    let computer = computerPlay()

    if (computer == "rock" && user == "scissors" || computer == "paper" && user == "rock" || computer == "scissors" && user == "paper") {
        compScore = compScore + 1;
        content.textContent = `User: ${user} Computer: ${computer}`;
        content2.textContent = `User: ${userScore} Computer: ${compScore}`
        content3.textContent = `You Lose the Round`
    } 
    
    else if (computer == user) {
        content.textContent = `User: ${user} Computer: ${computer}`;
        content2.textContent = `User: ${userScore} Computer: ${compScore}`
        content3.textContent = `It's a Draw Round`
    }   
    
    else {
        userScore = userScore + 1;
        content.textContent = `User: ${user} Computer: ${computer}`;
        content2.textContent = `User: ${userScore} Computer: ${compScore}`
        content3.textContent = `You Win the Round`
    }
}

//runs the game() function on each button click until a winner is determined (first to 5)
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.id);
            if (compScore == 5) {
            content.textContent = "";
            content2.textContent = `User: ${userScore} Computer: ${compScore}`
            content3.textContent = "";
            content4.textContent = "Computer Wins The Game";
            endGame()
        } 
            else if (userScore == 5) {
            content.textContent = "";
            content2.textContent = `User: ${userScore} Computer: ${compScore}`
            content3.textContent = "";
            content4.textContent = "You Win The Game";
            endGame()
        }
    });
});


const container = document.querySelector('#outcome');

const content = document.createElement('p1');
content.classList.add('rnd-play');

const content2 = document.createElement('p1');
content2.classList.add('score');

const content3 = document.createElement('p1');
content3.classList.add('rnd-outcome');

const content4 = document.createElement('p1');
content4.classList.add('winner');

container.appendChild(content);
container.appendChild(content2);
container.appendChild(content3);
container.appendChild(content4);
