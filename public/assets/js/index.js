{
    var data = 0;

document.getElementById("incdec").innerText = data;
  
//creation of increment function
function increment() {
    data = data + 1;
    document.getElementById("incdec").innerText = data;
}
//creation of decrement function
function decrement() {
    data = data - 1;
    document.getElementById("incdec").innerText = data;
}
}

{
    var datadown = 0;

document.getElementById("incdecdown").innerText = datadown;
  
//creation of increment function
function incrementdown() {
    datadown = datadown + 1;
    document.getElementById("incdecdown").innerText = datadown;
}
//creation of decrement function
function decrementdown() {
    datadown = datadown - 1;
    document.getElementById("incdecdown").innerText = datadown;
}}