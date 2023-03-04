const o0 = document.getElementById("b1");
const o1 = document.getElementById("b2");
const o2 = document.getElementById("b3");
const o3 = document.getElementById("b4");
const o4 = document.getElementById("b5");
const o5 = document.getElementById("b6");
const o6 = document.getElementById("b7");
const o7 = document.getElementById("b8");
const o8 = document.getElementById("b9");

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
        bharat.disable;
        console.log(bharat.id);
        document.getElementById(bharat.id).disabled = true;
    }
}