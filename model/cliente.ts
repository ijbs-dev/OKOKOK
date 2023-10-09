
/**
 * 
 * SISTEMA RESERVA DE HOTEL

Um hotel deseja registrar os dados de reservas feitas por telefone, então resolveu criar um sistema
para isso;

• Para cada clientes devem ser registrados CPF, nome, telefone e sexo. Deve ser registrado também
a quantidade de pessoas que participaram da reserva.
• É interessante registrar a nacionalidade do Cliente.

• Os clientes podem reservar um tipo de quarto do hotel para uma determinada data e por uma
certa quantidade de dias.

• Os quartos são cadastrados por número, andar e tipo.

• Para a confirmação da reserva é necessário fazer um pagamento de no mínimo 50% do valor,
através de cartão de crédito. Devem ser registrados os dados da operadora com código e nome da
operadora. Do cliente basta o número do cartão de crédito.

• As reservas devem apresentar um status, indicando se a reserva foi confirmada, cancelada ou
utilizada.
 * 

    CLIENTE = Do cliente basta o número do cartão de crédito.
 */


// cliente.ts
import Pessoa from "./pessoa";

class Cliente extends Pessoa {
    private idCliente: number;
    private sexo: string;
    private nacionalidade: string;
    private qtdPessoas: number;

    constructor(
        idCliente: number,
        cpf: string,
        nome: string,
        telefone: string,
        sexo: string,
        nacionalidade: string,
        qtdPessoas: number
    ) {
        super(cpf, nome, telefone);
        this.idCliente = idCliente;
        this.sexo = sexo;
        this.nacionalidade = nacionalidade;
        this.qtdPessoas = qtdPessoas;
    }

    get getCpf(): string {
        return this.cpf;
    }

    get getNome(): string {
        return this.nome;
    }

    get getTelefone(): string {
        return this.telefone;
    }

    public getIdCliente(): number {
        return this.idCliente;
    }

    public getSexo(): string {
        return this.sexo;
    }

    public getNacionalidade(): string {
        return this.nacionalidade;
    }

    public getQtdPessoas(): number {
        return this.qtdPessoas;
    }

    public setIdCliente(idCliente: number): void {
        this.idCliente = idCliente;
    }

    public setSexo(sexo: string): void {
        this.sexo = sexo;
    }

    public setNacionalidade(nacionalidade: string): void {
        this.nacionalidade = nacionalidade;
    }

    public setQtdPessoas(qtdPessoas: number): void {
        this.qtdPessoas = qtdPessoas;
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

    public toString(): string {
        return super.toString() +
            "\nID Cliente: " + this.idCliente +
            "\nSexo: " + this.sexo +
            "\nNacionalidade: " + this.nacionalidade +
            "\nQuantidade de Pessoas: " + this.qtdPessoas;
    }
}

export default Cliente;
