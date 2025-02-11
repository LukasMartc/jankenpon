const input = document.getElementById('name')
const username = document.getElementById('username')
const label = document.querySelector('label')

const rockUser = document.getElementById('rock-user')
const paperUser = document.getElementById('paper-user')
const scissorsUser = document.getElementById('scissors-user')

const rockComputer = document.getElementById('rock-computer')
const paperComputer = document.getElementById('paper-computer')
const scissorsComputer = document.getElementById('scissors-computer')

input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        const name = input.value
        username.textContent = name

        label.remove()
        input.remove()
    }
})

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function reseatOption() {
    rockUser.style.backgroundColor = '#ff9a68'
    paperUser.style.backgroundColor = '#019ee6'
    scissorsUser.style.backgroundColor = '#fbca03'
    rockComputer.style.backgroundColor = '#ff9a68'
    paperComputer.style.backgroundColor = '#019ee6'
    scissorsComputer.style.backgroundColor = '#fbca03'
}

function notSelected(option) {
    [rockComputer, paperComputer, scissorsComputer].forEach(btn => {
        btn.style.background = option === btn.dataset.value ? '' :  '#cacbd0'
    })
}

function playGame(optionUser) {
    const { selected, notSelectedOne, notSelectedTwo } = optionUser
    let optionPc = ['rock', 'paper', 'scissors']

    if(!username.textContent) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter your name to play",
        });  
    } else {
        notSelectedOne.style.backgroundColor = '#cacbd0'
        notSelectedTwo.style.backgroundColor = '#cacbd0'

        const randomElement = getRandomElement(optionPc)

        notSelected(randomElement)

        if(randomElement === selected) {
            Swal.fire({
                title: "Draw",
                icon: "question",
                position: "top-end"
            }).then(() => {
                reseatOption()
            })
        } else if(randomElement === notSelectedOne.dataset.value) {
            Swal.fire({
                icon: "error",
                title: "You lost",
                position: "top-end"
            }).then(() => {
                reseatOption()
            })
        } else {
            Swal.fire({
                title: "You won!",
                icon: "success",
                draggable: true,
                position: "top-end"
            }).then(() => {
                reseatOption()
            })
        }
    }
}

const optionRock = {
    selected: rockUser.dataset.value,
    notSelectedOne: paperUser,
    notSelectedTwo: scissorsUser
}

rockUser.addEventListener('click', () => playGame(optionRock))

const optionPaper = {
    selected: paperUser.dataset.value,
    notSelectedOne: scissorsUser,
    notSelectedTwo: rockUser
}

paperUser.addEventListener('click', () => playGame(optionPaper))

const optionScissors = {
    selected: scissorsUser.dataset.value,
    notSelectedOne: rockUser,
    notSelectedTwo: paperUser
}

scissorsUser.addEventListener('click', () => playGame(optionScissors))