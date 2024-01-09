const ligaBotao=document.getElementById("liga");
const desligaBotao= document.getElementById("desliga");
  const lampada=document.getElementById("lampada");
  
  function liga(){
    lampada.src='./assets/ligada.jpg';  
}
const desliga=()=>{
    lampada.src='./assets/desligada.jpg';
}

ligaBotao.addEventListener("click", liga);
desligaBotao.addEventListener("click", desliga);