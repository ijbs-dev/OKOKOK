// pessoa.ts
class Pessoa {
    protected cpf: string;
    protected nome: string;
    protected telefone: string;

    constructor(cpf: string, nome: string, telefone: string) {
        this.cpf = cpf;
        this.nome = nome;
        this.telefone = telefone;
    }

    get getCpf() {
        return this.cpf;
    }

    get getNome() {
        return this.nome;
    }

    get getTelefone() {
        return this.telefone;
    }

    set setCpf(cpf: string) {
        this.cpf = cpf;
    }

    set setNome(nome: string) {
        this.nome = nome;
    }

    set setTelefone(telefone: string) {
        this.telefone = telefone;
    }

    toString(): string {
        return "\nCPF: " + this.cpf +
            "\nNome: " + this.nome +
            "\nTelefone: " + this.telefone;
    }
    
}

export default Pessoa;
