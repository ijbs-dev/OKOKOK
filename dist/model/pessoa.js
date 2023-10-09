"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// pessoa.ts
class Pessoa {
    constructor(cpf, nome, telefone) {
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
    set setCpf(cpf) {
        this.cpf = cpf;
    }
    set setNome(nome) {
        this.nome = nome;
    }
    set setTelefone(telefone) {
        this.telefone = telefone;
    }
    toString() {
        return "\nCPF: " + this.cpf +
            "\nNome: " + this.nome +
            "\nTelefone: " + this.telefone;
    }
}
exports.default = Pessoa;
