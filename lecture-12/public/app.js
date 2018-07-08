$(document).ready(function(){
    display();
    let inp = $('#inp');
    let btn = $('#btn');
    let result = $('#result');

    btn.click(function(){
        let value1 = inp.val();
        add(value1);
    });

    function add(val1) {
        $.ajax({
            url: '/add',
            method: 'post',
            data: {todo: val1},
            success: function(data) {
                 let value = `<li>
                                <input type="hidden">
                                <span>${data}</span>
                                <button onclick="doDelete(this)">Delete</button>
                             </li>`
                 result.append(value);
            }
        })
    }

    function makeGetRequest(val1) {
        $.ajax({
            url: '/getCall',
            method: 'get',
            data: {username: val1},
            success: function(data) {
               console.log(data);

            }
        })

    }



    function display() {

        $.ajax({
            url: '/display',
            method: 'get',
            success: function(data) {
                data.forEach(function(d) {

                    let value = `<li>
                                <input type="hidden">
                                <span>${d}</span>
                                <button onclick="doDelete(this)">Delete</button>
                             </li>`

                    result.append(value);

                })
            }
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
            $(el).parent().remove();
        }
    })

}

