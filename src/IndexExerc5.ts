import { Departamento, UniversidadeExerc4, Pessoa } from "./departamento";


function exerc5() {
    const departamento1 = new Departamento("Engenharia de Dados");
    const departamento2 = new Departamento("Engenharia de software");
    const departamento3 = new Departamento("Análise de testes");
    const departamento4 = new Departamento("Recursos humanos");
    const departamento5 = new Departamento("Manutenção e montagem");
    const universidade = new UniversidadeExerc4("Fatec", "São Bernardo do Campo");
  
    universidade.adicionarDepartamento(departamento1);
    universidade.adicionarDepartamento(departamento2);
    universidade.adicionarDepartamento(departamento3);
    universidade.adicionarDepartamento(departamento4);
    universidade.adicionarDepartamento(departamento5);
  
    const pessoa = new Pessoa('Allan', '10/05/2001', universidade, departamento1 );
    pessoa.imprimirInformacoes();
    console.log(`\n\n\n\n\n\n\n${universidade.departamentos.map((departamento) => `\n${departamento.nome}`)}`);
  }

  exerc5();