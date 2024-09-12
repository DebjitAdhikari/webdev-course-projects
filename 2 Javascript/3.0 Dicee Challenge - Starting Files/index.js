
function getRandom(){
    return Math.floor (Math.random()*6)+1;
}
var p1=getRandom();
var p2=getRandom();

// function setTheValue(p){
//     if(p==1){
//         return "./images/dice1.png";
//     }else if(p==2){
//         return "./images/dice2.png";
//     }else if(p==3){
//         return "./images/dice3.png";
//     }else if(p==4){
//         return "./images/dice4.png";
//     }else if(p==5){
//         return "./images/dice5.png";
//     }else{
//         return "./images/dice6.png";
//     }
// }
// document.querySelector(".img1").setAttribute("src",setTheValue(p1));
// document.querySelector(".img2").setAttribute("src",setTheValue(p2));
function setImage(p){
    return "./images/dice"+p+".png";
}
var player1=setImage(p1);
var player2=setImage(p2);
document.querySelectorAll("img")[0].setAttribute("src",player1);
document.querySelectorAll("img")[1].setAttribute("src",player2);
if(p1>p2){
    document.querySelector("h1").textContent="Player 1 wins 🎉";
}else if(p1<p2){
    document.querySelector("h1").textContent="Player 2 wins 🎉";
}else{
    document.querySelector("h1").textContent="Draw ⚒️";
}

