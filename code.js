const title = document.querySelector("title")
console.log(title)
title.innerHTML = "A gnarly web game"

const h1 = document.createElement("h1")
h1.innerHTML = "Snake"
document.body.append(h1)

const gameBoard = document.createElement("table");
gameBoard.classList.add("gameBoard");
document.body.append(gameBoard);

const gameHeader = document.createElement("thead");
gameBoard.append(gameHeader);

const gameHeaderRow = document.createElement("tr");
gameHeader.append(gameHeaderRow);

const gameHeaderContent = document.createElement("th");
gameHeaderContent.colSpan = "10"
gameHeaderContent.innerHTML = "Someday we'll put the score here"
gameHeaderRow.append(gameHeaderContent)

const gameBody = document.createElement("tbody");
gameBoard.append(gameBody);

let snake = [
    "35",
    "45",
    "55",
    "65"
]

let apples = [
    "81"
]

const GameSquare = function (horizontal, vertical, type) {
    this.type = type;
    this.horizontal = horizontal;
    this.vertical = vertical;
}
//toHTML

GameSquare.prototype.toHTML = function (row){
    let td = document.createElement("td");
    row.append(td)
    td.innerHTML = `${this.horizontal}${this.vertical}`
    td.classList.add(this.type)
}

const updateBoard = function(){
    gameBody.innerHTML = "";
    for(let i = 0; i < 10; i += 1){
        const row = document.createElement("tr")
        gameBody.append(row)
        for(let j = 0; j < 10; j += 1){
            const data = new GameSquare(j, i, findType(j, i))
            data.toHTML(row)
        }
    }
}

function findType(horizontal, vertical){
    const coordinates = `${horizontal}${vertical}`
    if(snake.includes(coordinates)){
        return "snake"
    }
    else if(apples.includes(coordinates)){
        return "apple"
    }
    else{
        return "background"
    }
}
updateBoard()

function moveSnake(horizontal, vertical, direction){
    if(direction === "N"){
        //remove last snake piece
        
        //add snake piece above most recent snake piece
    }
}
