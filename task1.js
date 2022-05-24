namee=prompt("Введите свое имя",["Иван"]);
middlename=prompt("Введите свое отчество",["Иванович"]);
surname=prompt("Введите свою фамилию",["Иванов"]);
var clear1=namee.trim();
let clearNamedone=clear1.charAt(0).toUpperCase()+clear1.slice(1).toLowerCase();
var clear2=middlename.trim();
let clearMiddledone=clear2.charAt(0).toUpperCase()+clear2.slice(1).toLowerCase();
var clear3=surname.trim();
let clearSurnamedone=clear3.charAt(0).toUpperCase()+clear3.slice(1).toLowerCase();

document.getElementById('clearName').innerHTML = clearNamedone;
document.getElementById('clearSurname').innerHTML = clearSurnamedone;
document.getElementById('clearMiddle').innerHTML = clearMiddledone;
