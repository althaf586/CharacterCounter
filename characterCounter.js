document.getElementById("remaining").innerHTML=text.getAttribute("maxlength");
document.getElementById("text").addEventListener("input",function() {calculate(document.getElementById("text"))});
function calculate(t)
{

 document.getElementById("total").innerHTML=t.value.length;
 document.getElementById("remaining").innerHTML=text.getAttribute("maxlength")-document.getElementById("total").innerHTML;
 if(t.value.length<10)
 {
  document.getElementById("total").style.color="black";
  document.getElementById("remaining").style.color="black";
 }
  else if(t.value.length>=10 && t.value.length<30)
 {
  document.getElementById("total").style.color="red";
  document.getElementById("remaining").style.color="red";
 }
   else if(t.value.length>=30)
 {
  document.getElementById("total").style.color="red";
  document.getElementById("remaining").style.color="red";
 }
}
