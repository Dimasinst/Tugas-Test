//Mnentukan bilangan ganjil genap

var input = require("readline-sync");
var i = input.questionInt("Masukan bilangan : ")

if (i%2==0){
    console.log("Genap")
}else{
    console.log("Ganjil")
}