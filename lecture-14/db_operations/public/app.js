var todoList = []; // Global Scope Todolist
$(document).ready(function(){

    let inp = $('#inp');
    let btn = $('#btn');
    let result = $('#result');

    display();
    btn.click(function(){
        let value1 = inp.val();
        add(value1);
    });

    function add(val1) {
        console.log(result);

        $.ajax({
            url: '/add',
            method: 'post',
            data: {todo: val1},
            success: function(a) {
                let val = {
                    id: parseInt(a),
                    name: val1,
                    done: 1
                };

                todoList.push(val);
                console.log(todoList)
                localStorage.setItem('todoList', JSON.stringify(todoList));
                 let value = `<li>
                                <input type="hidden">
                                <span>${val.name}</span>
                                <button  id=${a} onclick="doDelete(this)">Delete</button>
                             </li>`
                 result.append(value);
            }
        })
    }

    function display() {
        todoList = JSON.parse(localStorage.getItem('todoList')) || [];

      if(todoList.length) {
          // Get data
          render(todoList);
        }

        else {
          // Make a call to API
           // Set the data inside LS
           displayCall();
        }

    }

    function render(data) {
        data.forEach(function(d) {
            console.log(d)
            let value = `<li>
                                <input type="hidden">
                                <span>${d.name}</span>
                                <button id=${d.id} onclick="doDelete(this)">Delete</button>
                             </li>`

            $('#result').append(value);

        })
    }


});

function displayCall() {
    $.ajax({
        url: '/display',
        method: 'get',
        success: function(data) {
            todoList = data;
            localStorage.setItem('todoList', JSON.stringify(todoList));
            render(todoList);
        }
    })

}
function doDelete(self, d) {
   console.log(self);
    $.ajax({
        url: '/delete',
        method: 'post',
        data: {id: self.id},
        success: function() {

            todoList.forEach((i,index) =>{
                if(i.id == self.id) {
                    todoList.splice(index, 1);
                    console.log(todoList);
                }
            });

            localStorage.setItem('todoList', JSON.stringify(todoList));
            $(self).parent().remove();
        }
    })

}




