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

function Click(event)
{
    // if(turn==0)
    // {
    //     img.value="x";
    //     turn=1;

    // }
    if (turn == 0) {
        event.value ="X";
        turn = 1;
        console.log(event.id);
        document.getElementById(event.id).disabled = true;
    }
    else if (turn == 1) {
        event.value = "O";
        turn = 0;
        event.disable;
        console.log(event.id);
        document.getElementById(event.id).disabled = true;
    }
    
}