
function display(val){

    document.getElementById('result').value += val;

}

function clearScreen() {
 document.getElementById("result").value = "";

}


function ops(){
 let x = document.getElementById("result").value
 let y = eval(x);
   document.getElementById("result").value = y
     return y
 }
 
 function backSpace() {
    let oneBack = document.getElementById('result').value;
    
    if (oneBack.length > 0) {
        document.getElementById('result').value = oneBack.slice(0, -1);
    }
}

