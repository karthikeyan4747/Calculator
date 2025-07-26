dispvalue = document.getElementById("inpute");


function append(char){
    dispvalue.value += char;
}

function clearval(){
    dispvalue.value = "";
}

function removeval(){
    dispvalue.value = dispvalue.value.slice(0,-1)
}

function evaluatee(){
    try{
        dispvalue.value = eval(dispvalue.value);
    }catch (err){
        dispvalue.value = "Error!!!!";
    }
}