// Baseando-se na Atividade 1, crie uma classe Departamento, que
// possui o atributo nome. A classe deve possuir um construtor e
// métodos de encapsulamento. A Universidade deve estar composta
// por vários departamentos. Adapte também a classe Pessoa para
// que ela tenha uma referência ao Departamento onde trabalha, ou
// seja, deve possuir uma associação com a classe Departamento.

export class UniversidadeExerc4 {
  private _departamentos: Departamento[];

  constructor(
    private _nome: string,
    private _local: string,
    departamentos: Departamento[] = []
  ) {
    this._departamentos = departamentos;
  }

  public get nome() {
    return this._nome;
  }
  public get local() {
    return this._local;
  }
  public get departamentos() {
    return this._departamentos;
  }

  adicionarDepartamento(departamento: Departamento) {
    this._departamentos.push(departamento);
  }
}

export class Departamento {
  constructor(private _nome: string) {}

  public get nome() {
    return this._nome;
  }
}

export class Pessoa {
  constructor(
    private _nome: string,
    private _dataDeNascimento: string,
    private _universidade: UniversidadeExerc4,
    private _departamento: Departamento
  ) {}

public get nome() {return this._nome}
public get dataDeNascimento() {return this._dataDeNascimento}
public get universidade() {return this._universidade}
public get departamento() {return this._departamento}

imprimirInformacoes() {
    console.log(`Nome: ${this.nome}`)
    console.log(`Data de nascimento: ${this._dataDeNascimento}`)
    console.log(`Universidade: ${this.universidade.nome}`);
    console.log(`Departamento: ${this.departamento.nome}`);
}
}



