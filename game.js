let win = 0, loss = 0, draw = 0, user;

let stone = document.querySelector("#stone");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let btn = document.querySelector(".reset");

let winScore = document.querySelector("#win");
let lossScore = document.querySelector("#loss");
let drawScore = document.querySelector("#draw");

let comUser = () => {
    let arr = ["stone", "paper", "scissor"];
    let com = Math.floor(Math.random() * 3);
    return arr[com];
}

let comSec = document.querySelector(".comCh");
let userSec = document.querySelector(".userCh");

let userImage = (choise) => {
    if (choise === "stone") {
        let image1 = document.createElement("img");
        image1.src = "rock.png";
        userSec.append(image1);
        image1.setAttribute("id", "userIMG");
    } else if (choise === "paper") {
        let image1 = document.createElement("img");
        image1.src = "paper.png";
        userSec.append(image1);
        image1.setAttribute("id", "userIMG");
    } else if (choise === "scissor") {
        let image1 = document.createElement("img");
        image1.src = "scissors.png";
        userSec.append(image1);
        image1.setAttribute("id", "userIMG");
    }
}

let comImage = (choise) => {
    if (choise === "stone") {
        let image1 = document.createElement("img");
        image1.src = "rock.png";
        comSec.append(image1);
        image1.setAttribute("id", "comIMG");
    } else if (choise === "paper") {
        let image1 = document.createElement("img");
        image1.src = "paper.png";
        comSec.append(image1);
        image1.setAttribute("id", "comIMG");
    } else if (choise === "scissor") {
        let image1 = document.createElement("img");
        image1.src = "scissors.png";
        comSec.append(image1);
        image1.setAttribute("id", "comIMG");
    }
}

let checkWinner = (userCh, comCh) => {
    console.log(userCh, comCh);
    if (userCh === "stone") {
        if (comCh === "paper") {
            loss++;
            document.querySelector(".modal-title").innerText = "Failed...";
            userImage("stone");
            comImage("paper");
            board();
            lossScore.innerText = `LOSS : ${loss}`;
        } else if (comCh === "scissor") {
            win++;
            document.querySelector(".modal-title").innerText = "Congratulations...";
            userImage("stone");
            comImage("scissor");
            board();
            winScore.innerText = `WIN : ${win}`;
        } else {
            draw++;
            document.querySelector(".modal-title").innerText = "Well Done...";
            userImage("stone");
            comImage("stone");
            board();
            drawScore.innerText = `DRAW : ${draw}`;
        }
    } else if (userCh === "paper") {
        if (comCh === "scissor") {
            loss++;
            document.querySelector(".modal-title").innerText = "Failed...";
            userImage("paper");
            comImage("scissor");
            board();
            lossScore.innerText = `LOSS : ${loss}`;
        } else if (comCh === "stone") {
            win++;
            document.querySelector(".modal-title").innerText = "Congratulations...";
            userImage("paper");
            comImage("stone");
            board();
            winScore.innerText = `WIN : ${win}`;
        } else {
            draw++;
            document.querySelector(".modal-title").innerText = "Well Done...";
            userImage("paper");
            comImage("paper");
            board();
            drawScore.innerText = `DRAW : ${draw}`;
        }
    } else if (userCh === "scissor") {
        if (comCh === "stone") {
            loss++;
            document.querySelector(".modal-title").innerText = "Failed...";
            userImage("scissor");
            comImage("stone");
            board();
            lossScore.innerText = `LOSS : ${loss}`;
        } else if (comCh === "paper") {
            win++;
            document.querySelector(".modal-title").innerText = "Congratulations...";
            userImage("scissor");
            comImage("paper");
            board();
            winScore.innerText = `WIN : ${win}`;
        } else {
            draw++;
            document.querySelector(".modal-title").innerText = "Well Done...";
            userImage("scissor");
            comImage("scissor");
            board();
            drawScore.innerText = `DRAW : ${draw}`;
        }
    }
}

stone.addEventListener("click", function userCh() {
    user = "stone";
    checkWinner(user, comUser());
    clearBoard();
});

paper.addEventListener("click", function userCh() {
    user = "paper";
    checkWinner(user, comUser());
    clearBoard();
});

scissor.addEventListener("click", function userCh() {
    user = "scissor";
    checkWinner(user, comUser());
    clearBoard();
});

let resetFun = () => {
    draw = 0;
    win = 0;
    loss = 0;
    lossScore.innerText = `LOSS : ${loss}`;
    winScore.innerText = `WIN : ${win}`;
    drawScore.innerText = `DRAW : ${draw}`;
}

btn.addEventListener("click", resetFun);

let board = () => {
    document.querySelector(".scoreBoardModal").click();
}

let clearBoard = () => {
    console.log("called");
    
    let img1 = document.querySelector("#userIMG");
    let img2 = document.querySelector("#comIMG");
    document.querySelector(".modalClose").addEventListener("click", () => {
        img1.remove();
        img2.remove();
    });
}
