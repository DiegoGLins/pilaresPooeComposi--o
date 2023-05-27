// Crie a classe Imovel, que possui um endereço e um preço.
// a. crie uma classe Novo, que herda Imovel e possui um adicional
// no preço. Crie métodos de acesso e impressão deste valor
// adicional.
// b. crie uma classe Velho, que herda Imovel e possui um desconto
// no preço. Crie métodos de acesso e impressão para este
// desconto.

export class Imovel {
  constructor(private endereco: string, private preco: number) {}
}

export class NovoImovel extends Imovel {
  constructor(endereco: string, preco: number, private _precoAdicional: number) {
    super(endereco, preco);
  }

  public get precoAdicional(){
    return this._precoAdicional
  }

  imprimePrecoAdicional(){
    console.log(`O valor adicional do imóvel é ${this.precoAdicional.toFixed(4)}`);
  }
}

export class VelhoImovel extends Imovel {
    constructor(endereco: string, preco: number, private _descontoImovel: number){
        super(endereco, preco);
    }

    public get precoDesconto(){
        return this._descontoImovel
    }

    imprimePrecoDesconto() {
        console.log(`O valor do desconto do imóvel é ${this.precoDesconto.toFixed(4)}`);
    }
}

