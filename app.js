
var randomNumber1=Math.floor(Math.random()*6)+1; //1-6

var randomDiceimage="dice"+randomNumber1+".jfif"; //dice1.jfif-dice6.jfif
var randomImagesource="images/"+randomDiceimage; //image/dice1.jfif-image/dice6.jfif
var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImagesource);


var randomNumber2=Math.floor(Math.random()*6)+1;

// var randomDiceimage="dice"+randomNumber2+".jfif"; //dice1.jfif-dice6.jfif
var randomImagesource="images/dice"+randomNumber2+".jfif"; //image/dice.jfif-image/dice6.jfif
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImagesource);
// var pro=["what is your name:"];
// console.log(pro);


if(randomNumber1>randomNumber2)
    {document.querySelector("h1").innerHTML="Player1 wins!";}
else if(randomNumber2>randomNumber1)
{document.querySelector("h1").innerHTML="Player2 wins!";}
else
{document.querySelector("h1").innerHTML="Both wins!";}