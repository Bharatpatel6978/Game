const o0 = document.getElementById("b1");
const o1 = document.getElementById("b2");
const o2 = document.getElementById("b3");
const o3 = document.getElementById("b4");
const o4 = document.getElementById("b5");
const o5 = document.getElementById("b6");
const o6 = document.getElementById("b7");
const o7 = document.getElementById("b8");
const o8 = document.getElementById("b9");
const w1 = document.getElementById("win");
let turn=0;

function Click(bharat)
{
    if (turn == 0) {
        bharat.value ="X";
        turn = 1;
        console.log(bharat.id);
        document.getElementById(bharat.id).disabled = true;
    }
    else if (turn == 1) {
        bharat.value = "O";
        turn = 0;
        console.log(bharat.id);
        document.getElementById(bharat.id).disabled = true;
    }
    Result();                                                                   
}

function Result()
{
    if(o0.value=="X" && o1.value=="X" && o2.value=="X")
    {
        console.log("X winner");
        w1.innerHTML="Player 1 Winner";
        // document.box.style.backgroundColor = 'green';
        // document.styleoxbackgroundColor = "red";
        // document.getElementByID("b1").style.backgroundColor = "red";
        o0.style.backgroundColor = "red";
        o1.style.backgroundColor = "red";
        o2.style.backgroundColor = "red";
        disable();
    }
    else if(o3.value=="X" && o4.value=="X" && o5.value=="X")
    {
        console.log("X winner");
        w1.innerHTML="Player 1 Winner";
        disable();
        o0.style.backgroundColor = "red";
        o1.style.backgroundColor = "red";
        o2.style.backgroundColor = "red";
    }
    else if(o6.value=="X" && o7.value=="X" && o8.value=="X")
    {
        console.log("X winner");
        w1.innerHTML="Player 1 Winner";
        disable();
    }
    else if(o0.value=="X" && o3.value=="X" && o6.value=="X")
    {
        console.log("X winner");
        w1.innerHTML="Player 1 Winner";
        disable();

    }
    else if(o1.value=="X" && o4.value=="X" && o7.value=="X")
    {
        console.log("X winner");
        w1.innerHTML="Player 1 Winner";
        disable();
    }
    else if(o2.value=="X" && o5.value=="X" && o8.value=="X")
    {
        console.log("X winner");
        w1.innerHTML="Player 1 Winner";
        disable();
    }
    else if(o0.value=="X" && o4.value=="X" && o8.value=="X")
    {
        console.log("X winner");
        w1.innerHTML="Player 1 Winner";
        disable();
    }
    else if(o2.value=="X" && o4.value=="X" && o6.value=="X")
    {
        console.log("X winner");
        w1.innerHTML="Player 1 Winner";
        disable();
    }
    if(o0.value=="O" && o1.value=="O" && o2.value=="O")
    {
        console.log("O winner");
        w1.innerHTML="Player 2 Winner";
        disable();
    }
    else if(o3.value=="O" && o4.value=="O" && o5.value=="O")
    {
        console.log("O winner");
        w1.innerHTML="Player 2 Winner";
        disable();
    }
    else if(o6.value=="O" && o7.value=="O" && o8.value=="O")
    {
        console.log("O winner");
        w1.innerHTML="Player 2 Winner";
        disable();
    }
    else if(o0.value=="O" && o3.value=="O" && o6.value=="O")
    {
        console.log("O winner");
        w1.innerHTML="Player 2 Winner";
        disable();
    }
    else if(o1.value=="O" && o4.value=="O" && o7.value=="O")
    {
        console.log("O winner");
        w1.innerHTML="Player 2 Winner";
        disable();
    }
    else if(o2.value=="O" && o5.value=="O" && o8.value=="O")
    {
        console.log("O winner");
        w1.innerHTML="Player 2 Winner";
        disable();
    }
    else if(o0.value=="O" && o4.value=="O" && o8.value=="O")
    {
        console.log("O winner");
        w1.innerHTML="Player 2 Winner";
        disable();
    }
    else if(o2.value=="O" && o4.value=="O" && o6.value=="O")
    {
        console.log("O winner");
        w1.innerHTML="Player 2 Winner";
        disable();
    }
    else if((o0.value=="X" || o0.value=="O")&&
        (o1.value=="X" || o1.value=="O")&&
        (o2.value=="X" || o2.value=="O")&&
        (o3.value=="X" || o3.value=="O")&&
        (o4.value=="X" || o4.value=="O")&&
        (o5.value=="X" || o5.value=="O")&&
        (o6.value=="X" || o6.value=="O")&&
        (o7.value=="X" || o7.value=="O")&&
        (o8.value=="X" || o8.value=="O"))
    {
        w1.innerHTML="Draw";
        disable();
    }
}
function disable()
{
    o0.disabled=true;
    o1.disabled=true;
    o2.disabled=true;
    o3.disabled=true;
    o4.disabled=true;
    o5.disabled=true;
    o6.disabled=true;
    o7.disabled=true;
    o8.disabled=true;
}
function Bgcolor()
{
    box.classList.add("color");
}