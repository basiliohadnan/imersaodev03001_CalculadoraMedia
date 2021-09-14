var nome = "Hadnan"

var notaDoPrimeiroBimestre = 9
var notaDoSegundoBimestre = 7
var notaDoTerceiroBimestre = 4
var notaDoQuartoBimestre = 5

var somaNotasBimestres = notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre

var mediaNotasBimestres = somaNotasBimestres / 4

var mediaNotasBimestresFixada = mediaNotasBimestres.toFixed(1)

function passouDeAno(mediaNotasBimestresFixada) {
  if (mediaNotasBimestresFixada >= 6) {
  return "Passou de ano!";
} 
else {
  return "Reprovou este ano, estude mais.";
}}

var boasVindas = "Boas vindas, " + nome + "!"
var notaFinal = `Nota final: ${mediaNotasBimestresFixada},  ${passouDeAno(mediaNotasBimestresFixada)}`

var divNotas = document.getElementById("resultadoNotas")

var notaFinalSpan = document.createElement('span')
notaFinalSpan.innerHTML = notaFinal;
divNotas.appendChild(notaFinalSpan);

var notaFinalLinhaUnica = "Em uma única linha | Nota final: " + ((notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4).toFixed(1)

// (32°F − 32) × 5/9 = 0°C
function converterFahrenheitParaCelsius (tempEmCelcius) {
      return (tempEmCelcius - 32) / 1.8 + " ºC"
}

var resultadoConversor = `Conversão de ºF para ºC: ${converterFahrenheitParaCelsius(102.2)}`

// Comentário
// Variáveis, string, console.log, toFixed(), operações matemáticas, concatenação

// Desafios
// 1. Quebrar cálcula da média em duas etapas (soma e divisão)
// 2. Inserir notas com valores decimais
// 3. Inserir lógica de passagem de ano (calculo e exibição do resultado)
// 4. Estilizar o fundo (trocar imagem e cor)
// 5. Exibir resultados do console.log na página
// 6. Criar um conversor de temperatura (F to C)
// 7. Milha pra km
// 8. Moedas diferentes
// 9. Inserir cálculo direto no console.log