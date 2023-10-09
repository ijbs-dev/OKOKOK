import Cliente from "./cliente";
import Cartao from "./cartao";

// Classe Reserva
class Reserva {
   private cliente: Cliente; // Associar a reserva a um cliente
   private cartao: Cartao;
   private idReserva: number;
   private statusReserva: string;
   private dataEntrada: Date; //Alterando para tipo Date
   private dataSaida: Date; //Alterando para tipo Date
   private numeroQuarto: number;
   private andarQuarto: number;
   private tipoQuarto: string; //add tipoQuarto

    constructor(
        cliente: Cliente,
        cartao: Cartao,
        idReserva: number,
        statusReserva: string,
        dataEntrada: Date, //type: Date
        dataSaida: Date, //type: Date
        numeroQuarto: number,
        andarQuarto: number, //add andarQuarto
        tipoQuarto: string //add tipoQuarto
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

    public getIdReserva(): number {
        return this.idReserva;
    }

    public getCliente(): Cliente {
        return this.cliente;
    }

    public getCartao(): Cartao {
        return this.cartao;
    }

    public getStatusReserva(): string {
        return this.statusReserva;
    }

    //add get getDataEntrada
    public getDataEntrada(): Date {
        return this.dataEntrada;
    }
    //add get getDataSaida
    public getDataSaida(): Date {
        return this.dataSaida;
    }

    public getNumeroQuarto(): number {
        return this.numeroQuarto;
    }

    public getAndarQuarto(): number {
        return this.andarQuarto;
    }
    //add get Tipo quarto
    public getTipoQuarto(): string {
        return this.tipoQuarto;
    }

    set setIdReserva(idReserva: number) {
        this.idReserva = idReserva;
    }

    set setCliente(cliente: Cliente) {
        this.cliente = cliente;
    }

    set setCartao(cartao: Cartao) {
        this.cartao = cartao;
    }

    set setStatusReserva(statusReserva: string) {
        this.statusReserva = statusReserva;
    }

    //adição setDataEntrada
    set setDataEntrada(dataEntrada: Date) {
        this.dataEntrada = dataEntrada;
    }
    //adição setDataSaida
    set setDataSaida(dataSaida: Date) {
        this.dataSaida = dataSaida;
    }

    set setNumeroQuarto(numeroQuarto: number) {
        this.numeroQuarto = numeroQuarto;
    }

    set setAndarQuarto(andarQuarto: number) {
        this.andarQuarto = andarQuarto;
    }
    //add settipoQuarto
    set setTipoQuarto(tipoQuarto: string) {
        this.tipoQuarto = tipoQuarto;
    }
    //add totalDias
    totalDias(): number {
        const tempoMilisegundos = this.dataSaida.getTime() - this.dataEntrada.getTime();    
        const totalDias = Math.ceil(tempoMilisegundos / (1000 * 3600 * 24));
        return totalDias;
    }
    //add CalcularValorTotalReserva
    calcularValorTotalReserva(): number {
        let taxa: number;

        switch(this.tipoQuarto) {
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
                throw new Error("Tipo de quarto desconhecido!")
        }

        function parseDate(dateString: string): Date {
            const parts = dateString.split('/');
            const day = parseInt(parts[0], 10);
            const month = parseInt(parts[1], 10) - 1; // O mês em JavaScript começa em 0 (janeiro é 0)
            const year = parseInt(parts[2], 10);
            return new Date(year, month, day);
        }
        
        const totalDias = this.totalDias();
        const valorTotalReserva = totalDias * taxa;
        return valorTotalReserva
    }

    public toString(): string {
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

export default Reserva;
