// cartao.ts
import Pessoa from "./pessoa";

class Cartao extends Pessoa {
    setBandeira(bandeira: any) {
        throw new Error('Method not implemented.');
    }
    setCodigoSeguranca(codigoSeguranca: any) {
        throw new Error('Method not implemented.');
    }
    private idCartao: number;
    private numero: number;
    private codigo: number;
    private operadora: string;

    constructor(
        idCartao: number,
        cpf: string,
        nome: string,
        telefone: string,
        numero: number,
        codigo: number,
        operadora: string
    ) {
        super(cpf, nome, telefone); 
        this.idCartao = idCartao;
        this.numero = numero;
        this.codigo = codigo;
        this.operadora = operadora;
    }

    limiteCartao(limite: number, valorReserva: number){ //olhar
        try{
            if (limite > (0.5*valorReserva)) {
            console.log(`Reserva finalizada!`)    
        } 
        } catch (error) {
            console.log('Pagamento não autorizado. Tente outra forma de pagamento.')
        }
    } 

    public getIdCartao(): number {
        return this.idCartao;
    }

    public getNumero(): number {
        return this.numero;
    }

    public getCodigo(): number {
        return this.codigo;
    }

    public getOperadora(): string {
        return this.operadora;
    }

    public setIdCartao(idCartao: number): void {
        this.idCartao = idCartao;
    }

    public setNumero(numero: number): void {
        this.numero = numero;
    }

    public setCodigo(codigo: number): void {
        this.codigo = codigo;
    }

    public setOperadora(operadora: string): void {
        this.operadora = operadora;
    }

    public toString(): string {
        return super.toString() +
            "\nID Cartão: " + this.idCartao +
            "\nNúmero: " + this.numero +
            "\nCódigo: " + this.codigo +
            "\nOperadora: " + this.operadora;
    }
}

export default Cartao;
