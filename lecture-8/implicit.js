/**
 * Created by aayusharora on 6/30/18.
 */
var fruit = {
    name: 'apple',
    getName: function() {
        return this.name;

    }
}

console.log(fruit.name);
console.log(fruit.getName());

function getName() {
    return fruit;

}

getName();
window.getName();
this.getName();