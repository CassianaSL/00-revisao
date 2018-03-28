var frase= (prompt("Digite a parágrafo:")).toLowerCase();

for(var i=0, vogal=0, pontos=0;i<frase.length; i++){
	if((frase.charAt(i)=="á")||(frase.charAt(i)[i]=="à")||(frase.charAt(i)=="ã")||(frase.charAt(i)=="â")||(frase.charAt(i)=="a")||
	(frase.charAt(i)=="é")||(frase.charAt(i)=="ê")||(frase.charAt(i)=="e")||(frase.charAt(i)=="í")||(frase.charAt(i)=="i")||
	(frase.charAt(i)=="ó")||(frase.charAt(i)=="ô")||(frase.charAt(i)=="õ")||(frase.charAt(i)=="o")||(frase.charAt(i)=="ú")||(frase.charAt(i)=="u")){
		vogal++;
	}
	if((frase.charAt(i)==".")||(frase.charAt(i)==",")||(frase.charAt(i)=="!")||(frase.charAt(i)=="?")){
		pontos++;
	}
}

var vetpara= frase.split(" ");
i=0;
for(var paragrafo=1, carac=0;i<vetpara.length; i++){
	carac+=(vetpara[i].length);
	if(vetpara[i]==""){
		paragrafo++;
	}
}
var palavras= (vetpara.length)-paragrafo;
var consoante= (carac-(vogal+pontos));

alert("A frase (paragrafo) contém:\n"+carac+" caracteres\n"+vogal+" vogais\n"+consoante+" consoantes\n"
+pontos+" pontuações\n"+palavras+" palavras\n"+paragrafo+" parágrafos");