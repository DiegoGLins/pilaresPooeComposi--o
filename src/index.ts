import { Cachorro, Cavalo, Gato } from "./animal";
import { Departamento } from "./departamento";
import { Imovel, NovoImovel, VelhoImovel } from "./imovel";
import { Camarote, Normal, Vip } from "./ingresso";
import { Pessoa, Universidade } from "./universidade";

function exerc1() {
  const ingressoNormal = new Normal(20);
  ingressoNormal.imprimeValor();

  const ingressoVip = new Vip(35, 50);
  ingressoVip.imprimeValor();

  const ingressoCamarote = new Camarote(35, 80);
  ingressoCamarote.imprimeValor();
}

// --------- / --------- / -------------

function exerc2() {
  const novoImovel = new NovoImovel(
    "Rua Orense, n. 55 - Diadema-SP",
    150.0,
    30.0
  );
  novoImovel.imprimePrecoAdicional();

  const velhoImovel = new VelhoImovel(
    "Rua Municipal, n. 1540 - Diadema-SP",
    190.0,
    56.0
  );
  velhoImovel.imprimePrecoDesconto();
}

// --------- / ----------- / -----------

function exerc3() {
  const cachorro = new Cachorro("Rex", 4, "mamifero");
  cachorro.latir();

  const cavalo = new Cavalo("Alazão", 4, "mamifero");
  cavalo.relinchar();

  const gato = new Gato("Lion", 4, "mamifero");
  gato.miar();
}

// --------- / --------- / ----------

function exerc4() {
  const universidade = new Universidade("Usp", "cidade universitaria n. 1230");
  const pessoa = new Pessoa("Mateus", "12/10/1996", universidade);
  pessoa.imprimirInformacoes();
}

exerc1()
exerc2()
exerc3()
exerc4()



