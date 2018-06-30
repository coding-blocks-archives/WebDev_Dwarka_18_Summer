/**
 * Created by aayusharora on 6/30/18.
 */

function read(x,y){
    console.log(x,y);
   console.log(this.refile);

}

var refile = "I am refile";
var file = {
    name: 'index',
    content: "xyz gfeyef",
    refile: "I am new file"
};

var file2 = {
    name: 'index',
    content: "xyz gfeyef",
    refile: "I am new file2"
};

// read();
read.apply(file2, ['a', 'b']);
