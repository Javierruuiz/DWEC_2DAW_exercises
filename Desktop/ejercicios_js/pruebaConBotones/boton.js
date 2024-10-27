const btn = document.getElementsByTagName("button");
function cambiaColor(){
document.body.style.backgroundColor = "red";
};


btn[0].addEventListener("mouseover",() => document.body.style.backgroundColor = "red");
btn[1].addEventListener("mouseover",() => document.body.style.backgroundColor = "blue");
//mouseover --> por encima passar el raton por el boton
//mouseout --> cuando ssales de estar por encima del boton


//hacer que la alerta deje de funcionar si pulsa ese boton
btn[1].addEventListener("click",()=>btn[0].removeEventListener("click",saltaAlert));
btn[0].addEventListener("click",saltaAlert);