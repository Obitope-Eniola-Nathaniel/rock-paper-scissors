const result = document.querySelector(".result");
const computerView = document.querySelector(".computer-view")

function computerChoice() {
    const images = ['rock.png', 'paper.png', 'scissors.png']
    const random = Math.floor(Math.random() * images.length)

    const imgElement = document.querySelector("#computer-pick")
    const computerText = document.querySelector(".computer-plays")
    // imgElement.setAttribute('src', images[random])
    computerText.innerHTML = 'computer plays...'
    imgElement.src = images[random]
    return imgElement
}


let image = document.querySelectorAll(".pic")
image.forEach((item) => {
    item.addEventListener("click", () => {
   
        computer = computerChoice()
        computerPlay = computer.getAttribute('src')
        player = item.getAttribute('src')

        if (player === computerPlay) {
            console.log("Its a tie!")
            result.innerHTML = 'Its a tie!'
        } 
        else if (player === "rock.png" && computerPlay === "scissors.png") {
            console.log("You win")
            result.innerHTML = 'You win!'
        }
        else if (player === "scissors.png" && computerPlay === "paper.png") {
            console.log("You win")
            result.innerHTML = 'You win!'
        }
        else if (player === "paper.png" && computerPlay === "rock.png") {
            console.log("You win")
            result.innerHTML = 'You win!'
        }
        else {
            console.log("You lose!")
            result.innerHTML = 'You lose'
        }

        console.log(item.getAttribute('src'))
        console.log(computer.getAttribute('src'))
        computerView.style.display = "block";
      
    })

})