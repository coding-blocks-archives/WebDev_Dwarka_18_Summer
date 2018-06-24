/**
 * Created by aayusharora on 6/24/18.
 */
var global = {};
var a = 3;
(function(a){
   var x=3;
   console.log(a);
    function main() {
        var a=7;
        var z;
        if(true) {
            var b = 3;
        }

        function mainx(){
            console.log(a+b);
            function zeroToOne(c=2) {
                console.log(a+b+c);
            }

            z = zeroToOne;
        }

        mainx();
        z(3);
    }



   function check() {

       return function overwrite() {
          return 3;

       }
   }

   global.m = check;
   check();
   var a = 2;
   console.log(a);
})(a);

console.log(a);
console.log(global.m()());