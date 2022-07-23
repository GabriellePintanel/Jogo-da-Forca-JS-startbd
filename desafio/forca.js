let palavra = '';
var letra;
var LetraChutadas = new Array;
var estadoJogo = 'agurdando chute';
var vidas = 6;
var arrayPalavra = new Array;
var mostra = new Array;
var p = '';
var v = '';
var n = '';
var g = '';
var l = '';
class Forca {
  constructor(String) {

    this.palavra = String;
    this.arrayPalavra = this.palavra
    for (var n = 0; n < this.arrayPalavra.length; n++) {
      mostra[n] = '_';
     
    }
    p = mostra.join("");
  }

  chutar(letra) {
    this.chute = letra;
    if (this.chute.length == 1) {
      if (LetraChutadas.includes(this.chute) == false) {
        LetraChutadas.push(this.chute);

        for (var i = 0; i < this.arrayPalavra.length; i++) {
          if (this.arrayPalavra[i] == this.chute) {
            mostra[i] = this.chute;
          }
        }
        if (mostra.indexOf(this.chute) < 0) {
          vidas--;
        }
      }
      p = mostra.join("");
      g = LetraChutadas.join("")
      }
    console.log(p)
  }
  buscarEstado() {
    v = this.arrayPalavra.toString();
    
    if (v === p && vidas!=0) {
      estadoJogo = 'ganhou';

    } else if (vidas != 0 && v != p) {
      estadoJogo = 'aguardando chute';

    } else if (vidas === 0) {
      estadoJogo = 'perdeu';
    }

    return estadoJogo // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"
  }
  buscarDadosDoJogo() {
    return {
      letrasChutadas: [g], // Deve conter todas as letras chutadas
      vidas: vidas, // Quantidade de vidas restantes
      palavra: [p] // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }

}
module.exports = Forca;
