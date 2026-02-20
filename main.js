const input = document.getElementById("input");
const addbtn = document.getElementById("addbtn");
const todocontent = document.getElementById("todolist");

let todos = [];
window.onload = () =>{
    todos = JSON.parse(localStorage.getItem("tasks")) || [];
todos.forEach(togo=>add(togo));
}


addbtn.addEventListener("click",()=>{
    const value = input.value.trim();
    if(value === ""){
        alert("Pls enter your Task");
        return;
    }
    
    todos.push(value);
    add(value);
    input.value = "";
})

function add(togo){
    const rows = document.createElement("div");
    rows.className = "todolistchild";

    const rod = document.createElement("div");
    rod.className = "todoli";

    const check = document.createElement("input");
    check.type = "checkbox";

    const para = document.createElement("p");
    para.innerText = togo;

    const rows2 = document.createElement("div");
    rows2.className = "todolistchild2";

    const editbtn = document.createElement("button");
    editbtn.innerHTML = "Edit";

    const delbtn = document.createElement("button");
    delbtn.innerText = "Clear";

    localStorage.setItem("tasks",JSON.stringify(todos));

    todocontent.appendChild(rows);
    rows.appendChild(rod);
    rod.appendChild(check);
    rod.appendChild(para);
    rows.appendChild(rows2);
    rows2.appendChild(editbtn);
    rows2.appendChild(delbtn);
  
    editbtn.addEventListener("click",()=>{
    const newText = prompt("Edit Your Task",para.innerText);

    if(newText === null || newText.trim() === ''){
        return;
    }

    const index = todos.indexOf(para.innerText);
    
    if(index >-1){
        todos[index] = newText.trim();
    }
    para.innerText = newText.trim();
    localStorage.setItem("tasks",JSON.stringify(todos));
})

    check.addEventListener("change",()=>{
        if(check.checked){
            para.style.textDecoration = "line-through";
            para.style.color = "gray";
        }
        else{
            para.style.textDecoration = "none";
            para.style.color = "white";
        }
    })

     delbtn.addEventListener("click",()=>{
        if(confirm("Did you Really done your task ?")){
            todocontent.removeChild(rows);
            rows.removeChild(rows2);
            remove(para.innerText);
        }
        
    })
}

function remove(togo){
    const index = todos.indexOf(togo);
        if(index>-1){
            todos.splice(index,1);
                 
    }
    localStorage.setItem("tasks",JSON.stringify(todos));
}



