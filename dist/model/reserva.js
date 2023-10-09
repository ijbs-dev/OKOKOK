"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Classe Reserva
class Reserva {
    constructor(cliente, cartao, idReserva, statusReserva, dataEntrada, //type: Date
    dataSaida, //type: Date
    numeroQuarto, andarQuarto, //add andarQuarto
    tipoQuarto //add tipoQuarto
    ) {
        this.cliente = cliente;
        this.cartao = cartao;
        this.idReserva = idReserva;
        this.statusReserva = statusReserva;
        this.dataEntrada = dataEntrada;
        this.dataSaida = dataSaida;
        this.numeroQuarto = numeroQuarto;
        this.andarQuarto = andarQuarto;
        this.tipoQuarto = tipoQuarto; //add tipoQuarto
    }
    getIdReserva() {
        return this.idReserva;
    }
    getCliente() {
        return this.cliente;
    }
    getCartao() {
        return this.cartao;
    }
    getStatusReserva() {
        return this.statusReserva;
    }
    //add get getDataEntrada
    getDataEntrada() {
        return this.dataEntrada;
    }
    //add get getDataSaida
    getDataSaida() {
        return this.dataSaida;
    }
    getNumeroQuarto() {
        return this.numeroQuarto;
    }
    getAndarQuarto() {
        return this.andarQuarto;
    }
    //add get Tipo quarto
    getTipoQuarto() {
        return this.tipoQuarto;
    }
    set setIdReserva(idReserva) {
        this.idReserva = idReserva;
    }
    set setCliente(cliente) {
        this.cliente = cliente;
    }
    set setCartao(cartao) {
        this.cartao = cartao;
    }
    set setStatusReserva(statusReserva) {
        this.statusReserva = statusReserva;
    }
    //adição setDataEntrada
    set setDataEntrada(dataEntrada) {
        this.dataEntrada = dataEntrada;
    }
    //adição setDataSaida
    set setDataSaida(dataSaida) {
        this.dataSaida = dataSaida;
    }
    set setNumeroQuarto(numeroQuarto) {
        this.numeroQuarto = numeroQuarto;
    }
    set setAndarQuarto(andarQuarto) {
        this.andarQuarto = andarQuarto;
    }
    //add settipoQuarto
    set setTipoQuarto(tipoQuarto) {
        this.tipoQuarto = tipoQuarto;
    }
    //add totalDias
    totalDias() {
        const tempoMilisegundos = this.dataSaida.getTime() - this.dataEntrada.getTime();
        const totalDias = Math.ceil(tempoMilisegundos / (1000 * 3600 * 24));
        return totalDias;
    }
    //add CalcularValorTotalReserva
    calcularValorTotalReserva() {
        let taxa;
        switch (this.tipoQuarto) {
            case "luxo":
                taxa = 150;
                break;
            case "padrao":
                taxa = 100;
                break;
            case "economico":
                taxa = 80;
                break;
            default:
                throw new Error("Tipo de quarto desconhecido!");
        }
        function parseDate(dateString) {
            const parts = dateString.split('/');
            const day = parseInt(parts[0], 10);
            const month = parseInt(parts[1], 10) - 1; // O mês em JavaScript começa em 0 (janeiro é 0)
            const year = parseInt(parts[2], 10);
            return new Date(year, month, day);
        }
        const totalDias = this.totalDias();
        const valorTotalReserva = totalDias * taxa;
        return valorTotalReserva;
    }
    toString() {
        return "\nCliente: " + this.cliente.toString() +
            "\nCartão: " + this.cartao.toString() +
            "\nStatus da Reserva: " + this.statusReserva +
            "\nData de Entrada: " + this.dataEntrada +
            "\nData de Saída: " + this.dataSaida +
            "\nNúmero do Quarto: " + this.numeroQuarto +
            "\nAndar do Quarto: " + this.andarQuarto +
            "\nTipo do Quarto: " + this.tipoQuarto +
            `\nValor da reserva: R$${this.calcularValorTotalReserva()}`; //adição dessa linha de retorno
    }
}
exports.default = Reserva;
