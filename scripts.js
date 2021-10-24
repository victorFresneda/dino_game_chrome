 


 const player = document.getElementById("player");

 document.addEventListener("click", function(){
     player.classList.add("playerJump")
 });

 player.addEventListener("animationend", () => {
     player.classList.remove("playerJump")
 });

 let score = 0;

 setInterval(() => {
    score++;
    document.getElementById("score").innerText = score; 
 }, 1000);

