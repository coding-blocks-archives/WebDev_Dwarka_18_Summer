/**
 * Created by aayusharora on 7/1/18.
 */

function foo() {
   console.log("foo called");

}

function bar() {
   console.log("Bar");
}

function makeRequest() {
    console.log("Making Request !! Take Time");

}
function main() {

    foo();

    setTimeout(function(){
      makeRequest()
        

    },20);




    bar();

}

main();