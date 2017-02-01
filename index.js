document.getElementById("btn").addEventListener("click",function(event){

var button = event.target;



switch(button.id){

case  "ok" : 
alert("okk");
break;
case "cancil":
alert("cancil");
break;
default : 
new error ("enexpected btn id");

};
});
  
