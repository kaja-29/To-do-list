const input = document.getElementById("input");
const addbtn = document.getElementById("addbtn");
const todocontent = document.getElementById("todolist");
const todocontentchild = document.getElementById("todolistchild");
const del = document.getElementById("del");

let todos = [];



addbtn.addEventListener("click",()=>{
    const value = input.value.trim();
    if(value === ""){
        alert("Pls enter your Task");
        return;
    }
    todos.push(value);
    add(value);
    input.value = "";
    console.log(todos);
})

function add(togo){
    const rows = document.createElement("div");
    rows.className = "todolistchild";

    const para = document.createElement("p");
    para.innerText = togo;

    const delbtn = document.createElement("button");
    delbtn.innerText = "Delete-task";

    todocontent.appendChild(rows);
    rows.appendChild(para);
    rows.appendChild(delbtn);
    
    para.addEventListener("click",()=>{
        para.style.textDecoration = "line-through";
    })

    delbtn.addEventListener("click",()=>{
        todocontent.removeChild(rows);
        remove(togo);
    })
}

function remove(togo){
    const index = todos.indexOf(togo);
        if(index>-1){
            todos.splice(index,1);        
    }
}



