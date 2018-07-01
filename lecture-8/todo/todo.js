/**
 * Created by aayusharora on 6/30/18.
 */
let todoList = [];
window.onload = function(){

    let btn = document.getElementById('btn');
    let result = document.getElementById('result');
    let input = document.getElementById('inp');

    btn.onclick = function(){

       let li = document.createElement('li');
       let span = document.createElement('span');
       let input = document.createElement('input');
       let button = document.createElement('button');

       li.appendChild(input);
       li.appendChild(span);
       li.appendChild(button);

       span.onclick = changeType;
       button.onclick = update;
       button.id = todoList.length + 1;
       input.type = "hidden";

       let inpVal = document.createTextNode(inp.value);
       span.appendChild(inpVal);

       let btnVal = document.createTextNode("Update");
       button.appendChild(btnVal);
       result.appendChild(li);
       todoList.push(span);
    }


    //1.  FUNCTION UPDATE
    //2. FUNCTION DELETE
    //3. Optimize this method using CreateNode
};

function update() {
    let element = this;
    // let val = document.getElementById('getValue').val;
    let eleParent =  element.previousElementSibling
    let val = eleParent.previousElementSibling.value;

    if(val) {
        eleParent.textContent = val;
        todoList[element.id - 1].textContent = val;
        eleParent.previousElementSibling.type="hidden";
    }
}

function changeType(){
    let element = this;
    element.previousElementSibling.type="text"
    element.previousElementSibling.value="";
}