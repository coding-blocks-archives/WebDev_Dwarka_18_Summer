/**
 * Created by aayusharora on 6/30/18.
 */
let todoList = [];
window.onload = function(){

    let btn = document.getElementById('btn');
    let result = document.getElementById('result');
    let input = document.getElementById('inp');

    btn.onclick = function(){
       value = `<li>
                    <input type="hidden">
                    <span onclick="changeType(this)">${input.value}</span> 
                    <button onclick="update(this)" id=${todoList.length + 1}>Update</button>  
                </li>  
      `;
       // result.innerHTML = value;
        todoList.push(value);
        display(todoList);
    }

    function display(todolist) {
        let value = "";
        todolist.forEach(function(todo){
           value += todo;
        })

        result.innerHTML = value;
    }

    //1.  FUNCTION UPDATE
    //2. FUNCTION DELETE
    //3. Optimize this method using CreateNode
};

function update(element) {
    // let val = document.getElementById('getValue').val;
    let eleParent =  element.previousElementSibling
    let val = eleParent.previousElementSibling.value;

    if(val) {
        eleParent.textContent = val;
        eleParent.previousElementSibling.type="hidden";
    }

    todoList[element.id - 1] = `<li>
                    <input type="hidden">
                    <span onclick="changeType(this)">${val}</span> 
                    <button onclick="update(this)">Update</button>  
                </li>  
      `;

}

function changeType(element, id){
    console.log(element.id);
    element.previousElementSibling.type="text"
    element.previousElementSibling.value="";
}