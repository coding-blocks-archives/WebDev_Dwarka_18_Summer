var todoList = [];
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
            success: function() {
                todoList.push(val1);
                console.log(todoList)
                localStorage.setItem('todoList', JSON.stringify(todoList));
                 let value = `<li>
                                <input type="hidden">
                                <span>${val1}</span>
                                <button onclick="doDelete(this)">Delete</button>
                             </li>`
                 result.append(value);
            }
        })
    }

    function display() {
       let todoList = JSON.parse(localStorage.getItem('todoList')) || [];
      if(todoList.length) {
          // Get data
          render(todoList);
        }

        else {
          // Make a call to API
           // Set the data inside LS
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

    }

    function render(data) {
        data.forEach(function(d) {

            let value = `<li>
                                <input type="hidden">
                                <span>${d}</span>
                                <button onclick="doDelete(this)">Delete</button>
                             </li>`

            $('#result').append(value);

        })
    }


});

function doDelete(el) {
    let index = $(el).parent().index();
    $.ajax({
        url: '/delete',
        method: 'post',
        data: {id: index},
        success: function() {
            todoList.splice(index, 1);
            localStorage.setItem('todoList', JSON.stringify(todoList));
            $(el).parent().remove();
        }
    })

}

