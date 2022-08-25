$(document).ready(function(){
	$('#tabela_next').empty(); //Limpando a tabela
	$('#release_next').empty(); //Limpando a tabela
	$('#tabela_last').empty(); //Limpando a tabela
	$('#release_last').empty(); //Limpando a tabela
	$.ajax({
		type:'post',		//Definimos o método HTTP usado
		dataType: 'json',	//Definimos o tipo de retorno
		url: 'getDailyNext.php',//Definindo o arquivo onde serão buscados os dados
		success: function(dados){
			
			for(var i=0;dados.length>i;i++){
				//Adicionando registros retornados na tabela
				var statusColor;
				var sep = dados[i].notes.split("nightlybuild/").pop();
				var url = dados[i].notes.split("-").shift();
				var testCase = sep.split("_").shift();
				var userTestName = testCase.split("/");
				var user=userTestName[0];
				var release = userTestName[1];
				var testName = userTestName[2];

				switch (dados[i].status) {
					case "p":
						statusColor = "#33CC33";
						dados[i].status = "PASSED";
						
						break;
					case "f":
						statusColor = "#FA5858";
						dados[i].status = "FAILED";						
						break;
					case "b":
						statusColor = "#BE81F7";
						dados[i].status = "BLOCKED";
						break;
					default:
						statusColor = "white";
						dados[i].status = "NOT RUN";
						break;
				}
				$('#tabela_next').append('<tr><td style="text-align: center;">'+dados[i].id+'</td><td style="text-align: center;">'+user+'</td><td style="text-align: center;"><a href="'+url+'">'+testName+'</a></td></td><td style="text-align: center;">'+release+'</td><td style="background-color: '+statusColor+'; text-align: center;">'+dados[i].status+'</td><td style="text-align: center;">'+dados[i].execution_ts+'</td></tr>');
			}
		}
	});
	$.ajax({
		type:'post',		//Definimos o método HTTP usado
		dataType: 'json',	//Definimos o tipo de retorno
		url: 'getReleaseNext.php',//Definindo o arquivo onde serão buscados os dados
		success: function(dados){
			
			for(var i=0;dados.length>i;i++){
				//Adicionando registros retornados na tabela
				var statusColor;
				var sep = dados[i].notes.split("release/").pop();
				var url = dados[i].notes.split("-").shift();
				var testCase = sep.split("_").shift();
				var userTestName = testCase.split("/");
				var user=userTestName[0];
				var release = userTestName[1];
				var testName = userTestName[2];
				
				switch (dados[i].status) {
					case "p":
						statusColor = "#33CC33";
						dados[i].status = "PASSED";
						break;
					case "f":
						statusColor = "#FA5858";
						dados[i].status = "FAILED";
						break;
					case "b":
						statusColor = "#BE81F7";
						dados[i].status = "BLOCKED";
						break;
					default:
						statusColor = "white";
						dados[i].status = "NOT RUN";
						break;
				}
				$('#release_next').append('<tr><td style="text-align: center;">'+dados[i].id+'</td><td style="text-align: center;">'+user+'</td><td style="text-align: center;"><a href="'+url+'">'+testName+'</a></td><td style="text-align: center;">'+release+'</td><td style="background-color: '+statusColor+'; text-align: center;">'+dados[i].status+'</td><td style="text-align: center;">'+dados[i].execution_ts+'</td></tr>');
			}
		}
	});
	$.ajax({
		type:'post',		//Definimos o método HTTP usado
		dataType: 'json',	//Definimos o tipo de retorno
		url: 'getDailyLast.php',//Definindo o arquivo onde serão buscados os dados
		success: function(dados){
			
			for(var i=0;dados.length>i;i++){
				//Adicionando registros retornados na tabela
				var statusColor;
				var sep = dados[i].notes.split("nightlybuild/").pop();
				var url = dados[i].notes.split("-").shift();
				var testCase = sep.split("_").shift();
				var userTestName = testCase.split("/");
				var user=userTestName[0];
				var release = userTestName[1];
				var testName = userTestName[2];
				
				switch (dados[i].status) {
					case "p":
						statusColor = "#33CC33";
						dados[i].status = "PASSED";
						
						break;
					case "f":
						statusColor = "#FA5858";
						dados[i].status = "FAILED";						
						break;
					case "b":
						statusColor = "#BE81F7";
						dados[i].status = "BLOCKED";
						break;
					default:
						statusColor = "white";
						dados[i].status = "NOT RUN";
						break;
				}
				$('#tabela_last').append('<tr><td style="text-align: center;">'+dados[i].id+'</td><td style="text-align: center;">'+user+'</td><td style="text-align: center;"><a href="'+url+'">'+testName+'</a></td></td><td style="text-align: center;">'+release+'</td><td style="background-color: '+statusColor+'; text-align: center;">'+dados[i].status+'</td><td style="text-align: center;">'+dados[i].execution_ts+'</td></tr>');
			}
		}
	});
	$.ajax({
		type:'post',		//Definimos o método HTTP usado
		dataType: 'json',	//Definimos o tipo de retorno
		url: 'getReleaseLast.php',//Definindo o arquivo onde serão buscados os dados
		success: function(dados){
			
			for(var i=0;dados.length>i;i++){
				//Adicionando registros retornados na tabela
				var statusColor;
				var sep = dados[i].notes.split("release/").pop();
				var url = dados[i].notes.split("-").shift();
				var testCase = sep.split("_").shift();
				var userTestName = testCase.split("/");
				var user=userTestName[0];
				var release = userTestName[1];
				var testName = userTestName[2];
				
				switch (dados[i].status) {
					case "p":
						statusColor = "#33CC33";
						dados[i].status = "PASSED";
						break;
					case "f":
						statusColor = "#FA5858";
						dados[i].status = "FAILED";
						break;
					case "b":
						statusColor = "#BE81F7";
						dados[i].status = "BLOCKED";
						break;
					default:
						statusColor = "white";
						dados[i].status = "NOT RUN";
						break;
				}
				$('#release_last').append('<tr><td style="text-align: center;">'+dados[i].id+'</td><td style="text-align: center;">'+user+'</td><td style="text-align: center;"><a href="'+url+'">'+testName+'</a></td><td style="text-align: center;">'+release+'</td><td style="background-color: '+statusColor+'; text-align: center;">'+dados[i].status+'</td><td style="text-align: center;">'+dados[i].execution_ts+'</td></tr>');
			}
		}
	});
});