function getRodada(){
	var rodada = document.getElementById('rodada').value;
	if(rodada>0 && rodada<39){
	$.ajax({
		url: "http://futebol.statig.com.br/campeonatos/475/primeira_fase_"+rodada+"_jogos.json",
		dataType: "jsonp"
	});
	}else{
		alert('Rodada Indisponivel!!')
	}
}

function classificacaoCampeonato(jsonTabela){
  $('#campeonato').empty();
  var tabela = [];
  tabela=jsonTabela.campeonato.classificacoes.SEM_TACA.GRUPO_UNICO.equipes;
  for(var i=0;i<tabela.length;i++){
	  $('#campeonato').append('<tr><td style="text-align: center;">'+tabela[i].posicao+'     -     '+tabela[i].nome+'</td><td style="text-align: center;">'+tabela[i].pontosGanhos+'</td><td style="text-align: center;">'+tabela[i].jogos+'</td><td style="text-align: center;">'+tabela[i].vitorias+'</td><td style="text-align: center;">'+tabela[i].empates+'</td><td style="text-align: center;">'+tabela[i].derrotas+'</td><td style="text-align: center;">'+tabela[i].golsPro+'</td><td style="text-align: center;">'+tabela[i].golsContra+'</td><td style="text-align: center;">'+tabela[i].saldoGols+'</td><td style="text-align: center;">'+tabela[i].aproveitamento+'</td></tr>');
  }
}
$.ajax({
  url: "http://futebol.statig.com.br/campeonatos/475/classificacao.json",
  dataType: "jsonp"
});

function primeira_fase_1_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_2_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_3_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_4_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_5_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_6_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_7_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_8_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_9_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_10_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_11_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_12_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_13_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_14_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_15_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_16_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_17_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_18_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_19_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_20_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_21_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_22_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_23_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_24_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_25_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_26_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_27_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_28_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_29_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_30_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_31_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_32_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_33_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_34_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_35_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_36_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_37_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
function primeira_fase_38_jogos(jsonCalendario){
  $('#calendario').empty();
  var calendario = [];
  calendario=jsonCalendario;
  for(var i=0;i<calendario.length;i++){
	  $('#calendario').append('<tr><td style="text-align: center;">'+calendario[i].mandante+'</td><td style="text-align: center;">'+calendario[i].placarMandante+' X '+calendario[i].placarVisitante+'</td><td style="text-align: center;">'+calendario[i].visitante+'</td><td style="text-align: center;">'+calendario[i].data+'</td><td style="text-align: center;">'+calendario[i].estadio+'/'+calendario[i].cidade+'</td><td style="text-align: center;">'+calendario[i].status+'/'+calendario[i].fase+'</td></tr>');
  }
}
