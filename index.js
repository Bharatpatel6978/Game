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
const r1 = document.getElementById("resetbtn");
const t1 = document.getElementById("cr1");
const t2 = document.getElementById("cr2");
const t3 = document.getElementById("cr3");
const t4 = document.getElementById("cr4");
const t5 = document.getElementById("cong");
const b1 =  document.getElementById("col-p1");
const b2 =  document.getElementById("col-p3");
let turn=0;
b1.style.borderBottom = '5px solid';


function Click(bharat)
{
    if (turn == 0) {
        b2.style.borderBottom = '5px solid ';
        b1.style.border = "none";
        bharat.value ="X";
        turn = 1;
        console.log(bharat.id);
        document.getElementById(bharat.id).disabled = true;
    }
    else if (turn == 1) {
        bharat.value = "O";
        turn = 0;
        b1.style.borderBottom = '5px solid ';
        b2.style.border = "none";
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
        t1.style.visibility = 'visible';
        t2.style.visibility = 'visible';
        t3.style.visibility = 'visible';
        t4.style.visibility = 'visible';
        t5.style.visibility = 'visible';
        b2.style.border = "none";
        o0.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o1.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o2.style.backgroundColor = "rgb(173 92 148 / 75%)";
        disable();
    }
    else if(o3.value=="X" && o4.value=="X" && o5.value=="X")
    {
        console.log("X winner");
        w1.innerHTML="Player 1 Winner";
        disable();
        t1.style.visibility = 'visible';
        t2.style.visibility = 'visible';
        t3.style.visibility = 'visible';
        t4.style.visibility = 'visible';
        t5.style.visibility = 'visible';
        b2.style.border = "none";
        o3.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o4.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o5.style.backgroundColor = "rgb(173 92 148 / 75%)";
    }
    else if(o6.value=="X" && o7.value=="X" && o8.value=="X")
    {
        console.log("X winner");
        w1.innerHTML="Player 1 Winner";
        disable();
        t1.style.visibility = 'visible';
        t2.style.visibility = 'visible';
        t3.style.visibility = 'visible';
        t4.style.visibility = 'visible';
        t5.style.visibility = 'visible';
        b2.style.border = "none";
        o6.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o7.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o8.style.backgroundColor = "rgb(173 92 148 / 75%)";
    }
    else if(o0.value=="X" && o3.value=="X" && o6.value=="X")
    {
        console.log("X winner");
        w1.innerHTML="Player 1 Winner";
        disable();
        t1.style.visibility = 'visible';
        t2.style.visibility = 'visible';
        t3.style.visibility = 'visible';
        t4.style.visibility = 'visible';
        t5.style.visibility = 'visible';
        b2.style.border = "none";
        o0.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o3.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o6.style.backgroundColor = "rgb(173 92 148 / 75%)";
    }
    else if(o1.value=="X" && o4.value=="X" && o7.value=="X")
    {
        console.log("X winner");
        w1.innerHTML="Player 1 Winner";
        disable();
        t1.style.visibility = 'visible';
        t2.style.visibility = 'visible';
        t3.style.visibility = 'visible';
        t4.style.visibility = 'visible';
        t5.style.visibility = 'visible';
        b2.style.border = "none";
        o1.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o4.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o7.style.backgroundColor = "rgb(173 92 148 / 75%)";
    }
    else if(o2.value=="X" && o5.value=="X" && o8.value=="X")
    {
        console.log("X winner");
        w1.innerHTML="Player 1 Winner";
        disable();
        t1.style.visibility = 'visible';
        t2.style.visibility = 'visible';
        t3.style.visibility = 'visible';
        t4.style.visibility = 'visible';
        t5.style.visibility = 'visible';
        b2.style.border = "none";
        o2.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o5.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o8.style.backgroundColor = "rgb(173 92 148 / 75%)";
    }
    else if(o0.value=="X" && o4.value=="X" && o8.value=="X")
    {
        console.log("X winner");
        w1.innerHTML="Player 1 Winner";
        disable();
        t1.style.visibility = 'visible';
        t2.style.visibility = 'visible';
        t3.style.visibility = 'visible';
        t4.style.visibility = 'visible';
        t5.style.visibility = 'visible';
        b2.style.border = "none";
        o0.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o4.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o8.style.backgroundColor = "rgb(173 92 148 / 75%)";
    }
    else if(o2.value=="X" && o4.value=="X" && o6.value=="X")
    {
        console.log("X winner");
        w1.innerHTML="Player 1 Winner";
        disable();
        t1.style.visibility = 'visible';
        t2.style.visibility = 'visible';
        t3.style.visibility = 'visible';
        t4.style.visibility = 'visible';
        t5.style.visibility = 'visible';
        b2.style.border = "none";
        o2.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o4.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o6.style.backgroundColor = "rgb(173 92 148 / 75%)";
    }
    if(o0.value=="O" && o1.value=="O" && o2.value=="O")
    {
        console.log("O winner");
        w1.innerHTML="Player 2 Winner";
        disable();
        t1.style.visibility = 'visible';
        t2.style.visibility = 'visible';
        t3.style.visibility = 'visible';
        t4.style.visibility = 'visible';
        t5.style.visibility = 'visible';
        b1.style.border = "none";
        o0.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o1.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o2.style.backgroundColor = "rgb(173 92 148 / 75%)";
    }
    else if(o3.value=="O" && o4.value=="O" && o5.value=="O")
    {
        console.log("O winner");
        w1.innerHTML="Player 2 Winner";
        disable();
        t1.style.visibility = 'visible';
        t2.style.visibility = 'visible';
        t3.style.visibility = 'visible';
        t4.style.visibility = 'visible';
        t5.style.visibility = 'visible';
        b1.style.border = "none";
        o3.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o4.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o5.style.backgroundColor = "rgb(173 92 148 / 75%)";
    }
    else if(o6.value=="O" && o7.value=="O" && o8.value=="O")
    {
        console.log("O winner");
        w1.innerHTML="Player 2 Winner";
        disable();
        t1.style.visibility = 'visible';
        t2.style.visibility = 'visible';
        t3.style.visibility = 'visible';
        t4.style.visibility = 'visible';
        t5.style.visibility = 'visible';
        b1.style.border = "none";
        o6.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o7.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o8.style.backgroundColor = "rgb(173 92 148 / 75%)";
    }
    else if(o0.value=="O" && o3.value=="O" && o6.value=="O")
    {
        console.log("O winner");
        w1.innerHTML="Player 2 Winner";
        disable();
        t1.style.visibility = 'visible';
        t2.style.visibility = 'visible';
        t3.style.visibility = 'visible';
        t4.style.visibility = 'visible';
        t5.style.visibility = 'visible';
        b1.style.border = "none";
        o0.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o3.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o6.style.backgroundColor = "rgb(173 92 148 / 75%)";
    }
    else if(o1.value=="O" && o4.value=="O" && o7.value=="O")
    {
        console.log("O winner");
        w1.innerHTML="Player 2 Winner";
        disable();
        t1.style.visibility = 'visible';
        t2.style.visibility = 'visible';
        t3.style.visibility = 'visible';
        t4.style.visibility = 'visible';
        t5.style.visibility = 'visible';
        b1.style.border = "none";
        o1.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o4.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o7.style.backgroundColor = "rgb(173 92 148 / 75%)";
    }
    else if(o2.value=="O" && o5.value=="O" && o8.value=="O")
    {
        console.log("O winner");
        w1.innerHTML="Player 2 Winner";
        disable();
        t1.style.visibility = 'visible';
        t2.style.visibility = 'visible';
        t3.style.visibility = 'visible';
        t4.style.visibility = 'visible';
        t5.style.visibility = 'visible';
        b1.style.border = "none";
        o2.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o5.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o8.style.backgroundColor = "rgb(173 92 148 / 75%)";
    }
    else if(o0.value=="O" && o4.value=="O" && o8.value=="O")
    {
        console.log("O winner");
        w1.innerHTML="Player 2 Winner";
        disable();
        t1.style.visibility = 'visible';
        t2.style.visibility = 'visible';
        t3.style.visibility = 'visible';
        t4.style.visibility = 'visible';
        t5.style.visibility = 'visible';
        b1.style.border = "none";
        o0.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o4.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o8.style.backgroundColor = "rgb(173 92 148 / 75%)";
    }
    else if(o2.value=="O" && o4.value=="O" && o6.value=="O")
    {
        console.log("O winner");
        w1.innerHTML="Player 2 Winner";
        disable();
        t1.style.visibility = 'visible';
        t2.style.visibility = 'visible';
        t3.style.visibility = 'visible';
        t4.style.visibility = 'visible';
        t5.style.visibility = 'visible';
        b1.style.border = "none";
        o2.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o4.style.backgroundColor = "rgb(173 92 148 / 75%)";
        o6.style.backgroundColor = "rgb(173 92 148 / 75%)";
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
