/**
 * Created by aayusharora on 6/24/18.
 */

function pricePerkm(km) {
  return km<=5?(km*10):((km>5 && km<10)? ((km-5)*20 + 50): (5*10 + 5*20 + (km-10)*35) );
}

function pricePertime(time) {
    return time<=5?0:((time>5 && time<10)? ((time-5)*10): (50 + (time-10)*15) );
}

window.onload = function() {
    var time = document.getElementById('time');
    var km = document.getElementById('km');
    var result = document.getElementById('result');
    var btn = document.getElementById('btn');

    btn.onclick = function(){
        var timevalue = time.value;
        var kmvalue = km.value;
        var totalPrice = pricePertime(timevalue) + pricePerkm(kmvalue);
        result.innerHTML = totalPrice;
    }
    console.log(time);
};