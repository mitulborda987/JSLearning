function display(args) {
    return args*args;
} 
var result = display(30)
console.log(result);



var show = function(args){
    console.log('Hi Good Morning');
}
show();
console.log(typeof show);



// FE - Function expression
var sum = function(arg1, arg2){
    console.log(arg1 + arg2);
    return arg1*arg2;
}
var result = sum(100, 50);
console.log(result);