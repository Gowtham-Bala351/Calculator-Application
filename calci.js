let inputvalues=document.getElementById("inputvalues")

function input() {
    inputvalues.value
    console.log( inputvalues.value); 
}
function display(num) {
    inputvalues.value+=num
}
function clearonecharcater() {
    inputvalues.value =inputvalues.value.slice(0,-1)
}
function clearallcharacter() {
    inputvalues.value=" "
}

function calculate() {
    try {
        inputvalues.value=eval(inputvalues.value)
    } 
    catch(err) {
        inputvalues.value="Syntax error.."
        alert("invalid operations")
    }  
}
 
 
