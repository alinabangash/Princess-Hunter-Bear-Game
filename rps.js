
let playerpoints = 0;
let comppoints = 0;

const playerscore_span = document.getElementById("playerscore");
const compscore_span = document.getElementById("compscore");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const princess_div = document.getElementById("p");
const hunter_div = document.getElementById("h");
const bear_div = document.getElementById("b");

function getComputerChoice(){
    const choices =['p','h','b'];
    const rand = Math.floor(Math.random() * choices.length);
    return choices[rand];
}

function converttoword(letter){
    if(letter === "p"){
        return "Princess";
    }
    if(letter === "h"){
        return "Hunter";
    }
    if(letter === "b"){
        return "Bear";
    }
}

function win(player, comp){
    playerpoints++;
    playerscore_span.innerHTML = playerpoints;
    compscore_span.innerHTML = comppoints;
    const smallplayer = "player".fontsize(3).sub();
    const smallcomp = "comp".fontsize(3).sub();
    result_p.innerHTML = `${converttoword(player)}${smallplayer} beats ${converttoword(comp)}${smallcomp}. You win!`;
    document.getElementById(player).classList.add("greenglow");
    setTimeout(function() { document.getElementById(player).classList.remove("greenglow")}, 400);
}



function lose(player, comp){
    comppoints++;
    playerscore_span.innerHTML = playerpoints;
    compscore_span.innerHTML = comppoints;
    const smallplayer = "player".fontsize(3).sub();
    const smallcomp = "comp".fontsize(3).sub();
    result_p.innerHTML = `${converttoword(player)}${smallplayer} loses to ${converttoword(comp)}${smallcomp}. You lost...`;
    document.getElementById(player).classList.add("redglow");
    setTimeout(function() { document.getElementById(player).classList.remove("redglow")}, 400);
}


function draw(player, comp){
    const smallplayer = "player".fontsize(3).sub();
    const smallcomp = "comp".fontsize(3).sub();
    result_p.innerHTML = `${converttoword(player)}${smallplayer} equals ${converttoword(comp)}${smallcomp}. It's a draw`;
    document.getElementById(player).classList.add("grayglow");
    setTimeout(function() { document.getElementById(player).classList.remove("grayglow")}, 400);
}


function game(userchoice){
    const compchoice = getComputerChoice();
    switch (userchoice + compchoice){
        case "hb":
        case "bp":
        case "ph":
            win(userchoice,compchoice);
            break;
        case "hp":
        case "pb":
        case "bh":
            lose(userchoice,compchoice);
            break;
        case "hh":
        case "pp":
        case "bb":
            draw(userchoice,compchoice);
            break;

    }
}



function main() {
    princess_div.addEventListener('click', function(){
    game("p");
    })

    hunter_div.addEventListener('click', function(){
    game("h");
        })

    bear_div.addEventListener('click', function(){
    game("b");
    })

}

main();