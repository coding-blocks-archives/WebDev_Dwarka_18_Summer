/**
 * Created by aayusharora on 7/4/18.
 */

$(document).ready(function(){
   let result = $('#result');
   let btn = $('#btn');
   let url = 'http://reduxblog.herokuapp.com/api/posts?key="AA"';
    $.get(url, function(data){
        // console.log(data);
        // renderDetail(data)
    });

    btn.click(function(){

        makePost();
    })

    function makePost() {
        $.ajax({
           url: url,
           method: 'POST',
           data:{
               id: 12,
               title: 'Hi hello!',
               categories: 'Coding Blocks',
               content: 'Second Blog Entry'
        }, success: function(data){
            console.log(data);

        }})

    }

});


