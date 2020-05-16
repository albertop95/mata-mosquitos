

var altura=0;
var largura=0;
var vidas = 3;
tempo = 20;

var tempoCriacaoMosca=1500;

var nivel = window.location.search
nivel = nivel.replace('?','');
if(nivel == 'normal'){
	tempoCriacaoMosca = 1500;
}
else if(nivel == 'dificil'){
	tempoCriacaoMosca = 1000;
}
else if(nivel == 'chucknorris'){
	tempoCriacaoMosca = 900;
}

function ajustaTamanhoPalcoJogo(){
	altura = window.innerHeight;
	largura = window.innerWidth;
	console.log(altura, largura);
}

ajustaTamanhoPalcoJogo();

var cronometro = setInterval(function(){
	tempo -= 1;
	if(tempo<0){
		window.clearInterval(cronometro);
		window.clearInterval(criaMosca);
		window.location.href = "vitoria.html";
	}
	document.getElementById("cronometro").innerHTML = tempo;
	
},1000);

function posicaoRandomica(){

	//remover mosca anterior caso exista

	if(document.getElementById("mosca")!=null){
		document.getElementById("mosca").remove();
		removeVida();
	}

	var posicaoX = Math.floor(Math.random() * largura)-90;
	var posicaoY = Math.floor(Math.random() * altura)-90;
	console.log(posicaoX, posicaoY);

	//Tratamento caso o valor seja negativo
	// nesse caso nao apareceria no ecra
	posicaoX = posicaoX < 0 ? 0 : posicaoX;
	posicaoY = posicaoY < 0 ? 0 : posicaoY;

	var classeTamanho = tamanhoAleatorio();
	
	//Criar de forma progamática elemento HTML
	var mosca = document.createElement('img');
	mosca.src = "img/mosca.png";
	mosca.className="mosca"+classeTamanho+ " " + ladoAleatorio() ;
	mosca.style.left = posicaoX + "px";
	mosca.style.top = posicaoY + "px";
	mosca.style.position = "absolute";
	mosca.id = "mosca";
	mosca.onclick = function(){
		this.remove();
	}

	document.body.appendChild(mosca);


}


function tamanhoAleatorio(){
	var classe = Math.ceil(Math.random() * 3);
	return classe;
}

function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2);
	switch(classe){
		case 0:
			return "ladoA";
		case 1:
			return "ladoB";	
	}
}


function removeVida(){
	vidas--;
	if(vidas == 2){
		var vida1 = document.getElementById("coracao1");
		vida1.src = "img/coracao_vazio.png";
	}
	if(vidas == 1){
		var vida2 = document.getElementById("coracao2");
		vida2.src = "img/coracao_vazio.png";
	}
	if(vidas == 0){
		var vida3 = document.getElementById("coracao3");
		vida3.src = "img/coracao_vazio.png";
	}
	if(vidas<0){
		window.location.href = "fim_de_jogo.html"
	console.log(vidas);
	}
}