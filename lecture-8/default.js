/**
 * Created by aayusharora on 6/30/18.
 */
function original() {
    fake();

    function notOriginal() {
        console.log(this);

    }

    notOriginal();


}

function fake(){
    console.log(this);
}

original();