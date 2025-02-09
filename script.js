const input = document.getElementById('name')
let username = document.getElementById('username')
const label = document.querySelector('label')

const rockUser = document.getElementById('rock-user')
const paperUser = document.getElementById('paper-user')
const scissorsUser = document.getElementById('scissors-user')

const rockComputer = document.getElementById('rock-computer')
const paperComputer = document.getElementById('paper-computer')
const scissorsComputer = document.getElementById('scissors-computer')

let optionPc = ['rock', 'paper', 'scissors']

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

function notSelected(option) {
    if(option === 'rock') {
        paperComputer.style.backgroundColor = '#cacbd0'
        scissorsComputer.style.backgroundColor = '#cacbd0'
    } else if(option === 'paper') {
        rockComputer.style.backgroundColor = '#cacbd0'
        scissorsComputer.style.backgroundColor = '#cacbd0'
    } else {
        rockComputer.style.backgroundColor = '#cacbd0'
        paperComputer.style.backgroundColor = '#cacbd0'
    }
}

function reseatOption() {
    rockUser.style.backgroundColor = '#ff9a68'
    paperUser.style.backgroundColor = '#019ee6'
    scissorsUser.style.backgroundColor = '#fbca03'
    rockComputer.style.backgroundColor = '#ff9a68'
    paperComputer.style.backgroundColor = '#019ee6'
    scissorsComputer.style.backgroundColor = '#fbca03'
}

rockUser.addEventListener('click', () => {
    if(!username.textContent) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter your name to play",
        });  
    } else {
        paperUser.style.backgroundColor = '#cacbd0'
        scissorsUser.style.backgroundColor = '#cacbd0'
    
        let optionUser = rockUser.dataset.value
        let randomElement = getRandomElement(optionPc)
    
        notSelected(randomElement)
        
        if(randomElement === optionUser) {
            Swal.fire({
                title: "Draw",
                text: "It repeats",
                icon: "question"
            }).then(() => {
                reseatOption()
            })
        } else if(randomElement === 'paper') {
            Swal.fire({
                icon: "error",
                title: "You lost",
                text: "Good luck next time",
            }).then(() => {
                reseatOption()
            })
        } else {
            Swal.fire({
                title: "You won!",
                icon: "success",
                draggable: true
            }).then(() => {
                reseatOption()
            })
        }
    }

})

paperUser.addEventListener('click', () => {
    if(!username.textContent) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter your name to play",
        });  
    } else {
        rockUser.style.backgroundColor = '#cacbd0'
        scissorsUser.style.backgroundColor = '#cacbd0'
    
        let optionUser = paperUser.dataset.value
        let randomElement = getRandomElement(optionPc)
    
        notSelected(randomElement)
        
        if(randomElement === optionUser) {
            Swal.fire({
                title: "Draw",
                text: "It repeats",
                icon: "question"
            }).then(() => {
                reseatOption()
            })
        } else if(randomElement === 'scissors') {
            Swal.fire({
                icon: "error",
                title: "You lost",
                text: "Good luck next time",
            }).then(() => {
                reseatOption()
            })
        } else {
            Swal.fire({
                title: "You won!",
                icon: "success",
                draggable: true
            }).then(() => {
                reseatOption()
            })
        }
    }
})

scissorsUser.addEventListener('click', () => {
    if(!username.textContent) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter your name to play",
        });  
    } else {
        paperUser.style.backgroundColor = '#cacbd0'
        rockUser.style.backgroundColor = '#cacbd0'
    
        let optionUser = scissorsUser.dataset.value
        let randomElement = getRandomElement(optionPc)
    
        notSelected(randomElement)
        
        if(randomElement === optionUser) {
            Swal.fire({
                title: "Draw",
                text: "It repeats",
                icon: "question"
            }).then(() => {
                reseatOption()
            })
        } else if(randomElement === 'rock') {
            Swal.fire({
                icon: "error",
                title: "You lost",
                text: "Good luck next time",
            }).then(() => {
                reseatOption()
            })
        } else {
            Swal.fire({
                title: "You won!",
                icon: "success",
                draggable: true
            }).then(() => {
                reseatOption()
            })
        }
    }

})

 



