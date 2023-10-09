"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// cartao.ts
const pessoa_1 = __importDefault(require("./pessoa"));
class Cartao extends pessoa_1.default {
    setBandeira(bandeira) {
        throw new Error('Method not implemented.');
    }
    setCodigoSeguranca(codigoSeguranca) {
        throw new Error('Method not implemented.');
    }
    constructor(idCartao, cpf, nome, telefone, numero, codigo, operadora) {
        super(cpf, nome, telefone);
        this.idCartao = idCartao;
        this.numero = numero;
        this.codigo = codigo;
        this.operadora = operadora;
    }
    limiteCartao(limite, valorReserva) {
        try {
            if (limite > (0.5 * valorReserva)) {
                console.log(`Reserva finalizada!`);
            }
        }
        catch (error) {
            console.log('Pagamento não autorizado. Tente outra forma de pagamento.');
        }
    }
    getIdCartao() {
        return this.idCartao;
    }
    getNumero() {
        return this.numero;
    }
    getCodigo() {
        return this.codigo;
    }
    getOperadora() {
        return this.operadora;
    }
    setIdCartao(idCartao) {
        this.idCartao = idCartao;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    setCodigo(codigo) {
        this.codigo = codigo;
    }
    setOperadora(operadora) {
        this.operadora = operadora;
    }
    toString() {
        return super.toString() +
            "\nID Cartão: " + this.idCartao +
            "\nNúmero: " + this.numero +
            "\nCódigo: " + this.codigo +
            "\nOperadora: " + this.operadora;
    }
}
exports.default = Cartao;
