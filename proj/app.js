document.addEventListener('DOMContentLoaded', () => {
    //making array of cards
    const cardArray = [
        {
            name: "cake",
            img: "images/cake.jpg"
        },
        {
            name: "cake",
            img: "images/cake.jpg"
        },
        {
            name: "flamingo",
            img: "images/flamingo.jpg"
        },
        {
            name: "flamingo",
            img: "images/flamingo.jpg"
        },
        {
            name: "flowers",
            img: "images/flowers.jpeg"
        },
        {
            name: "flowers",
            img: "images/flowers.jpeg"
        },
        {
            name: "sky",
            img: "images/sky.jpg"
        },
        {
            name: "sky",
            img: "images/sky.jpg"
        }
    ]

    cardArray.sort(() => 0.5 - Math.random());

    //creating gameboard
    const grid = document.querySelector(".main");
    const resultDisplay = document.querySelector(".results");
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    function createBoard() {
        for(let i=0; i<cardArray.length; i++) {
            let card = document.createElement("img");
            card.setAttribute("src", "images/colour.jpg");
            card.setAttribute("data-id", i);
            card.setAttribute("class", "card");
            card.addEventListener("click", flipCard);
            grid.appendChild(card);
        }
    }

    function checkForMatch() {
        let cards = document.querySelectorAll("img");
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(cardsChosen[0] === cardsChosen[1]) {
            cardsWon.push(cardsChosen);
        }
        else {
            cards[optionOneId].setAttribute("src", "images/colour.jpg");
            cards[optionTwoId].setAttribute("src", "images/colour.jpg");
        }

        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = "Congratulations!!!";
        }
    }

    function flipCard() {
        var cardId = this.getAttribute("data-id");
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute("src", cardArray[cardId].img);
        
        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 1000);
        }

    }

    createBoard();
})
