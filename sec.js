let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-Container");
let msg=document.querySelector("#msg");

let turn0="true";
let count=0;

const winPattern=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2],
];

const resetGame=()=>{
    turn0=true;
    enableBox();
    count=0;
    msgContainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0==true){
            box.innerText="0";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        let isWinner=checkWinner();
        count++;
        if(count==9 && !isWinner){
            gameDraw();
        }
    });
});

const gameDraw=()=>{
    msg.innerText=`Game Draw`;
    msgContainer.classList.remove("hide");
    disableBox();
}

const disableBox=()=>{
    for(let i of boxes){
        i.disabled=true;
    }
};

const enableBox=()=>{
    for(let i of boxes){
        i.disabled=false;
        i.innerText="";
    }
};

const showWinner=(Winner)=>{
    msg.innerText=`Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
};

const checkWinner=()=>{
    for(let i of winPattern){
        let pos1Val=boxes[i[0]].innerText;
        let pos2Val=boxes[i[1]].innerText;
        let pos3Val=boxes[i[2]].innerText;
        if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                showWinner(pos1Val);
                return true;
            }
        }
    }
};

resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);