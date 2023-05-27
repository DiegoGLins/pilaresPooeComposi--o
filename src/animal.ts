// Identifique os atributos e comportamentos que são comuns entre os
// 3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
// comportamento diferente para cada animal

export abstract class Animal {
  constructor(
    public nome: string,
    public numeroDepatas: number,
    public especie: string
  ){}
}

export class Cachorro extends Animal {
    latir() {
        console.log("au au au au")
    }
    }


export class Cavalo extends Animal {
    relinchar() {
        console.log('ihi hi hi');
}
}

export class Gato extends Animal {
    miar() {
        console.log('Miau Miau Miau');
    }
}
