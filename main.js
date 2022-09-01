function calc (){
  var a =   parseInt(document.querySelector("#value1").value);
  var b =   parseInt(document.querySelector("#value2").value);
  var op =   document.querySelector("#operator").value;
  var calculate;

  if (op=="Plus"){
 calculate = a + b;
  } else if (op=="Minus"){
    calculate = a - b;
  } else if (op=="Divide") {
    calculate = a / b;
  } else if (op=="Multiply"){
    calculate = a * b;
  }


  document.querySelector("#result").innerHTML=calculate
}