function pessoa(nome) {
    this.nome = nome;
    this.dizoi = function() {
        console.log(this.nome + "dil Olá")
    }
}

function funcionario(nome, cargo , salario) {
    this.cargo = cargo;
      let _salario = salario;

    this.getsalario = function(){
        return _salario;
    }

    this.setsalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.aumento = function() {
        const novosalario = _salario * 1.1;
        _salario = novosalario;
    }

    this.dizcargo = function() {
        console.log(this.cargo);
    }

    pessoa.call(this, nome);
}

function encarregado(nome) {
    funcionario.call(this, nome, "encarregado", 7000)

this.aumento = function() {
    const novosalario = this.getsalario() * 1.07;
    this.setsalario(novosalario);
    }
}

function pedreiro(nome) {
    funcionario.call(this, nome, "pedreiro", 4000)

this.aumento = function() {
    const novosalario = this.getsalario() * 1.20;
    this.setsalario(novosalario);
    }
}

const funcionario1 = new funcionario("Michele","gerente", 15000);
const funcionario2 = new encarregado ("pedro")
const funcionario3 = new pedreiro ("tiago")

funcionario1.aumento();
console.log(funcionario1.getsalario())

funcionario2.aumento();
console.log(funcionario2.getsalario())


funcionario3.aumento();
console.log(funcionario3.getsalario())



