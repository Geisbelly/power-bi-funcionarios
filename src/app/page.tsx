"use client";
import { FuncionraiosComuns, Gerente, Diretor } from '../../models/Funcionrios';



const Home: React.FC = () =>{

  const salvarFuncionario = () =>{

    const nome = document.getElementById('nome') as HTMLInputElement;
    const salario = document.getElementById('salario') as HTMLInputElement;
    const tempo = document.getElementById('tempo_empresa') as HTMLInputElement;
    const cargo = document.getElementById('cargos') as HTMLSelectElement;

    if (cargo.value === 'diretor'){
      const func = new Diretor(nome.value,parseInt(tempo.value),parseInt(salario.value))
      criarElementosHTML(func);
    } else if (cargo.value === 'gerente'){
      const func = new Gerente(nome.value,parseInt(tempo.value),parseInt(salario.value))
      criarElementosHTML(func);
    } else{
      const func = new FuncionraiosComuns(nome.value,parseInt(tempo.value),parseInt(salario.value))
      criarElementosHTML(func);
    }
    
  }

  const criarElementosHTML = (f: FuncionraiosComuns) => {
    const divFun = document.createElement('li');
    const nome = document.createElement('h3');
    const tempo = document.createElement('p');
    const cargo = document.createElement('p');
    const salario = document.createElement('p');
    const bonus = document.createElement('p');

    nome.textContent =  f.getNome();
    tempo.textContent = "Tempo de Empresa: "+f.getTempo_empresa()+" ano";
    salario.textContent = "Salário: R$"+f.getSalario();
    bonus.textContent = "Bônus: R$"+f.calcularBonus();

    if( f instanceof Gerente){
      cargo.textContent = "Cargo: Gerente";
    } else if (f instanceof Diretor){
      cargo.textContent = "Cargo: Diretor";
    }else {
      cargo.textContent = "Cargo: Funcionario Comum";
    }

    divFun.appendChild(nome);
    divFun.appendChild(tempo);
    divFun.appendChild(cargo);
    divFun.appendChild(salario);
    divFun.appendChild(bonus);

    const prin = document.getElementById('funcionarios');
    prin?.appendChild(divFun);

  }

  return (
    <div id='main'>
      <div id='formulario-container'>
        <h1>Funcionarios</h1>
        <div id='formularios'>
          <div id='um'>
            <input type="text" id='nome' placeholder='Nome do Funcionario' />
            <select name="cargos" id="cargos">
              <option value="comum">Funcionario Comum</option>
              <option value="gerente">Gerente</option>
              <option value="diretor">Diretor</option>
            </select>
          </div>
          <div id='dois'>
            <input type="text" id='salario' placeholder='Salário' />
            <input type="number" id='tempo_empresa' placeholder='Tempo de empresa em anos' />
          </div>
          <button onClick={salvarFuncionario}>Salvar</button>
        </div>
      </div>
      <div id='funcionarios-container'>
        <ul id='funcionarios'></ul>
      </div>
    </div>
  );
};


export default Home;
