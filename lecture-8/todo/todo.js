/**
 * Created by aayusharora on 6/30/18.
 */

window.onload = function(){

    let btn = document.getElementById('btn');
    let result = document.getElementById('result');
    let input = document.getElementById('inp');
    let value = "";
    btn.onclick = function(){
       value += `<li>${input.value}</li>`;
       result.innerHTML = value;
    }


    //1.  FUNCTION UPDATE
    //2. FUNCTION DELETE
    //3. Optimize this method using CreateNode
};