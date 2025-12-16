let st=Math.random()*20+1;
let asd=Math.floor(st);
function again(){
    st=Math.random()*20+1;
    asd=Math.floor(st);
    score=20;
    document.getElementById("g").innerText=`your score : ${score}`;
}
function press(){
    let a=document.getElementById(`a`).value;
    if(a>asd) {
        document.getElementById("e").innerText=`please choose a smaller number`;
        score--;
        document.getElementById("g").innerText=`your score : ${score}`;
    }
    else if(a<asd) {
        document.getElementById("e").innerText=`please choose a larger number`;
        score--;
        document.getElementById("g").innerText=`your score : ${score}`;
    }
    else if(a==asd){
        document.getElementById("e").innerText=`you have choosen the write number babby`;
        document.getElementById("g").innerText=`your score : ${score}`;
        hello();

    }
}
let score=20;
let bscore=0;
function hello(){
    if(score>=bscore){
        bscore=score;
        document.getElementById("e").innerText=`you have choosen the write number`;
        document.getElementById("g").innerText=`your score : ${score}`;
        document.getElementById("f").innerText=`your best score : ${bscore}`;
    }
}