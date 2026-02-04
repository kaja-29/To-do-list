const input = document.getElementById("input");
const addbtn = document.getElementById("addbtn");
const todocontent = document.getElementById("todolist");

let todos = [];

addbtn.addEventListener("click",()=>{
    todos.push(input.value);''
    add(input.value);
    input.value = "";
})

function add(togo){
    const para = document.createElement("p");
    para.innerText = togo;
    todocontent.appendChild(para);
    
    para.addEventListener("click",()=>{
        para.style.textDecoration = "line-through";
        remove(togo);
    })

    para.addEventListener("dblclick",()=>{
        todocontent.removeChild(para);
        remove(togo);    
    })
}

function remove(togo){
    const index = todos.indexOf(togo);
    if(index>-1){
        todos.splice(index,1);
    }

}