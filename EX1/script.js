confirm("Achas que consegue vencer de um computador?");

//perguntar e name query
let player = prompt("Mas antes disso, como queres que te chame?");
alert("Boa " + player + ", agora sim podemos começar!");

alert("Vamos lá!");

//tutorial
confirm("Então o que vamos fazer é pensar num número de 0-100, e se pensares no mesmo número que eu ganhas o jogo... e um prémio! Estás pront@?");

//prompt jogo
let number = prompt ("De 0-100 estás a pensar em qual?");

//resultados de respostas ao jogo
if (number == "20") {
      alert("OMG! Eu pensei nesse! Ganhaste " + person + "! Venceste o jogo (:"); //you won!

      alert("Aposto que estás entusiamad@ com o prémio, huh?");
      alert("O teu prémio é a seguinte mensagem parabenizadora: \n\n Parabéns " + person + " venceste o jogo!!! (:");
  }

  else if (number >100){
      alert ("Era suposto ser um número de 1-100... vamos tentar denovo..."); //respostas fora do limite
  }

  else {
      alert("Opah... não era nesse que eu estava a pensar, tenta denovo..."); //you lost :(
  };
