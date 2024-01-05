class Heroi {
    constructor(nome, tipo, arma) {
        this.nome = nome;
        this.tipo = tipo;
        this.arma = arma;
    }
    
    escreva() {
        console.log(`O ${this.nome} atacou usando ${this.tipo}, com seu ${this.arma}`);
    }
}
let jogador1= new Heroi("Gandalf", "magia", "cajado");
let jogador2= new Heroi("Guerreiro", "espada", "escudo");

jogador1.escreva();
jogador2.escreva();
