//alerta popup 3 segundos depois da página carregar
window.onload = setTimeout(function(){
  alert("Thank you for visiting this page and keeping Keith's legacy alive.");
}, 3000);

//alerta depois de 1 min agradecendo de novo
setTimeout(reallyThanks, 60000);
function reallyThanks () {
  alert("really, thanks!!!");
}


//mudar cor do fundo do header com js em vez de css
let myBackground = document.querySelector("h2");
myBackground.addEventListener("mouseover", () => { //mudar cor com o mouse em cima
  myBackground.style.color = "#e0e0e0";
});

myBackground.addEventListener("mouseleave", () => { //voltar a mudar para a cor inicial
  myBackground.style.color = "#000000";
});


//livro de visistas//

  let livroVisita = document.querySelector("#assinaturas").addEventListener('click', assinatura); 

  function assinatura(){
    let nome = prompt("quer assinar o livro de visita?"); 

    let newSign = document.querySelector("#newSign"); // utilizar o texto definido p/ nome do utilizador
    newSign.innerHTML += (nome+", "); //adicionar assinatura
  }


