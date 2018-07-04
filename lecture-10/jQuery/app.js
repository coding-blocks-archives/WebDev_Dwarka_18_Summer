/**
 * Created by aayusharora on 7/4/18.
 */
$(document).ready(function(){
    let input = $('#inp');
    let btn = $('#btn');
    let result = $('#result');

    btn.click(function(){
      let value = `<li>
                    <input type="hidden">
                    <span onclick="changeType(this)">${input.val()}</span>
                    <button onclick="update(this)">Update</button>
                  </li>`;
      result.append(value);

    })
});

function update(el) {
    let sibling = $(el).prev();
    let grandSibling = sibling.prev();
    let val = grandSibling.val();
    if(val) {
        $(el).prev().text(val);
    }

    grandSibling.attr('type', 'hidden');
}

function changeType(el){
   $(el).prev().attr('type', 'text');
}