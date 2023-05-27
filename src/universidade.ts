// a. Crie uma classe chamada Universidade, que terá como
// atributos: nome e local. Além disso, deve possuir um método
// construtor e métodos para encapsulamento dos seus
// atributos.
// b. Uma classe chamada Pessoa, com os atributos: nome e data
// de nascimento (que pode ser String). Assim como na outra
// classe, crie um método construtor e métodos para
// encapsulamento de seus atributos.
// c. Cada pessoa poderá estar associada a uma universidade.
// d. A classe pessoa deve possuir um método que informe seus
// atributos e a universidade em que trabalha


export class Universidade {
    constructor(private _nome: string, protected _local: string ){
    }
    public get nome() { return this._nome }
    public get local() { return this._local }

}

export class Pessoa {
    constructor(private _nome: string, private _dataDeNascimento: string, private _universidade: Universidade){
    }
    public get nome() { return this._nome }
    public get dataDeNascimento() { return this._dataDeNascimento }
    public get universidade() { return this._universidade }

    imprimirInformacoes(){
        console.log(`nome: ${this.nome}`)
        console.log(`data de nascimento: ${this.dataDeNascimento}`)
        console.log(`Universidade que trabalha: ${this.universidade.nome}`)
        }
}


