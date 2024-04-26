// ⚠️ Don't use innerHTML, use innerText instead for security reasons

// i moved image variable declaration to the top so all Functions can have access to it
const image = document.querySelectorAll(".pic")

const result = document.querySelector(".result");
const computerView = document.querySelector(".computer-view")


//I'm also importing player and computer score span here

let playerScore = parseInt(document.getElementById("myScore")).innerText || 0
let computerScore = parseInt(document.getElementById("comScore")).innerText || 0

const sound1 = new Audio("click.wav")
const sound2 = new Audio("loose.wav")
const sound3 = new Audio("win.wav")



function computerChoice() {
    const images = ['rock.png', 'paper.png', 'scissors.png']
    const random = Math.floor(Math.random() * images.length)

    const imgElement = document.querySelector("#computer-pick")
    const computerText = document.querySelector(".computer-plays")
    // imgElement.setAttribute('src', images[random])
    computerText.innerText = 'computer plays...'
    imgElement.src = images[random]

    return imgElement
}


image.forEach((item) => {
    item.addEventListener("click", () => {
         // The code below, i made another loop on each image item, made the images become inactive after you click. To control user's activity. This is done with their pointer Events set to None
        sound1.play()
        image.forEach((item) => {
            item.style.pointerEvents = "none"
            item.style.opacity = "0.5"
        })

         // Added a setTimeout below to make computer's choice div disappear by setting it's display to none and also made the Players images active again after 4 seconds. The images get back interactivity with their pointer Events set to auto
        setTimeout(() => {
            document.querySelector(".computer-view").style.display = "none"
            image.forEach((item) => {
                item.style.pointerEvents = "auto"
                item.style.opacity = "1"
                item.style.transform = "scale(1)"
            })
        },4000)

        item.style.opacity = "1"
        item.style.transform = "scale(1.2)"

         // the code below set's back computer game display to flex on click because it was previously in None to make it disappear.
        document.querySelector(".computer-view").style.display = "flex"

        computer = computerChoice() 
        computerPlay = computer.getAttribute('src')
        player = item.getAttribute('src')

        if (player === computerPlay) {
           
            result.innerHTML = 'Its a tie!'
            result.style.color = "yellow"
        } 
        else if (player === "rock.png" && computerPlay === "scissors.png") {
         
            result.innerHTML = 'You win!'
            playerScore += 1
            result.style.color = "green"
            sound3.play()

            document.getElementById("myScore").innerText = playerScore
        }
        else if (player === "scissors.png" && computerPlay === "paper.png") {
        
            result.innerHTML = 'You win!'
            playerScore += 1
            result.style.color = "green"
            sound3.play()

            document.getElementById("myScore").innerText = playerScore
        }
        else if (player === "paper.png" && computerPlay === "rock.png") {
        
            result.innerHTML = 'You win!'
            playerScore += 1
            result.style.color = "green"
            sound3.play()

            document.getElementById("myScore").innerText = playerScore
        }
        else {
      
            result.innerHTML = 'You lose'
            computerScore += 1
            result.style.color = "red"
            sound2.play()

            document.getElementById("myScore").innerText = computerScore
        }

        console.log(item.getAttribute('src'))
        console.log(computer.getAttribute('src'))

    })

})