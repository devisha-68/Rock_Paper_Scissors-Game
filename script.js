let user_score = 0, com_score = 0;
let message = document.getElementById('message');
const choice = document.querySelectorAll('.options')

let user_ans;

choice.forEach((options) => {
    options.addEventListener("click", () => {
        user_ans = options.getAttribute("id")
        console.log(user_ans)
        play(user_ans)
    })
})

const play = (user_ans) => {
    let list = ['rock', 'paper', 'scissors']
    let randomIndex = Math.floor(Math.random() * list.length);
    let com_ans = list[randomIndex];
    console.log(com_ans)

    if (user_ans == com_ans) {
        console.log("Draw")
        message.innerText = "Draw"
    }
    else if (user_ans == 'paper' && com_ans == 'rock' || user_ans == 'rock' && com_ans == 'scissors' || user_ans == 'scissors' && com_ans == 'paper') {
        user_score++;
        console.log(`You win... your ${user_ans} beats ${com_ans}`)
        user.innerText = user_score;
        message.innerText = `Congo!! You win... Your ${user_ans} beats ${com_ans}`;
    }
    else {
        com_score++;
        console.log(`com win.. Your ${user_ans} loses against ${com_ans}`)
        computer.innerText = com_score;
        message.innerText = `Oops!! Computer win.. Your ${user_ans} loses against ${com_ans}`
    }
}

let user = document.getElementById('user_score')
user.innerText = user_score;

let computer = document.getElementById('com_score')
computer.innerText = com_score;
