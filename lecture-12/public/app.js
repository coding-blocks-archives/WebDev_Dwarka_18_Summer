$(document).ready(function(){

    let inp = $('#inp');
    let btn = $('#btn');
    let pass = $('#pass');

    btn.click(function(){
        let value1 = inp.val();
        let value2 = pass.val();
        makeGetRequest(value1, value2);
    });


    function makeGetRequest(val1, val2) {
        $.ajax({
            url: '/getCall',
            method: 'get',
            data: {username: val1, password: val2},
            success: function(data) {
               console.log(data);

            }
        })

    }
});