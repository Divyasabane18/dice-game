var random = Math.floor(Math.random() * 6) + 1;
var randomDice ="dice" + random + ".png";
var imageDice = "images/" + randomDice;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src" ,imageDice );

var random2 = Math.floor(Math.random()*6)+1;
var randomDice2 = "images/" + "dice" + random2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src" ,randomDice2);

if(random>random2){
    document.querySelector("h1").innerHTML="player 1 is the winner";
}
else if(random<random2){
    document.querySelector("h1").innerHTML="player 2 is the winner";
}
else{
    document.querySelector("h1").innerHTML="draww"
}

