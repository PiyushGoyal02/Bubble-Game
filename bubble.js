// function bubbleFun(){

//     var clutter = "";
//     for (var i = 1; i <= 102; i++){
//     let value = Math.floor(Math.random()*10);
//     clutter += `<div class="bubble">${value}</div>`;
// } 
// document.querySelector(".pbtm").innerHTML = clutter ;
// }
// bubbleFun();

// function timeUpdate (){
//     var timer = 60;
//     var timer1 = setInterval (function (){
//         if(timer > 0){
//             timer--;
//             document.querySelector("#secound").textContent = timer;
//         }
//         else {
//             clearInterval(timer1);
//             document.querySelector(".pbtm").innerHTML = `<h2> Game Over </h2>`;
//         }
//     },1000);
// }
// timeUpdate();

// var hitKro;
// function hitJabKaro (){
//     hitKro = Math.floor(Math.random()*10);
//    document.querySelector("#hit").textContent = hitKro;
// }
// hitJabKaro();


// var score = 0;
// function increaseScore (){
//     score = score + 10;
//     document.querySelector("#scoreVal").textContent = score;
// }



// document.querySelector(".pbtm").addEventListener("click", function(piyush){
//     let clickNumber = (Number(piyush.target.textContent));
//     if (hitKro == clickNumber){
//         increaseScore();
//         hitJabKaro();
//         bubbleFun();
//     }
// });





/* Bubble Leke Aana */
function bubbleValue(){
    var clutter = "";
    for (let i = 1; i < 102; i++){
        let value = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${value}</div>`;
    }
    document.querySelector(".pbtm").innerHTML = clutter;
}
bubbleValue();


/* Hit Kai Andr Random Number */
var hitValue;
function hitJabKru (){
    hitValue = Math.floor(Math.random()*10);
    document.querySelector("#hit").innerHTML = hitValue;
}
hitJabKru();


/* Time Value Set Karna 60 Sec */
var timer = 60;
var time1 = setInterval (function (){
    if(timer > 0){
        timer--;
        document.querySelector("#secound").innerHTML = timer;
    }
    else {
        clearInterval(time1);
        var totalScore = document.querySelector("#scoreVal");
        document.querySelector(".pbtm").innerHTML = `<h2> Game Over </h2>`;
    }
},1000);


/* Score Value ++ Karna */
var score = 0;
function scoreValue (){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
};


/* Hit Or Bubbles Compair And Score++, HitVAlue And Bubbles Refresh */
document.querySelector(".pbtm").addEventListener("click", function (apna){
    let checkNumber = (apna.target.textContent);
    if (hitValue == checkNumber){
        scoreValue();
        hitJabKru();
        bubbleValue();
    }
});



