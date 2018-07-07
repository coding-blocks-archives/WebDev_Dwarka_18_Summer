/**
 * Created by aayusharora on 7/7/18.
 */
const index = require('./index');
console.log(index.z());
var arg = process.argv.slice(2);
index.z(arg);

