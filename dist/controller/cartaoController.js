"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cartao_1 = __importDefault(require("../model/cartao"));
const router = express_1.default.Router();
// ==========> CRIANDO Cartao <=============
const cartoes = [
    new cartao_1.default(1, "12345678910", "João", "999999999", 123456789, 123, "Mastercard"),
    new cartao_1.default(2, "98765432100", "Maria", "888888888", 987654321, 321, "Visa"),
    new cartao_1.default(3, "11122334455", "Pedro", "777777777", 111223344, 456, "Elo"),
    // Adicione quantos cartoes desejar
];
/**
 * {
    "cpf": "12345678910",
    "nome": "João",
    "telefone": "999999999",
    "idCartao": 4,
    "numero": 89878546754,
    "codigo": 789,
    "operadora": "American Express"
}
 */
// Rota para criar um cartao
router.post("/cartao", (req, res) => {
    try {
        const { idCartao, cpf, nome, telefone, numero, codigo, operadora } = req.body;
        const cartao = new cartao_1.default(idCartao, cpf, nome, telefone, numero, codigo, operadora);
        cartoes.push(cartao);
        res.status(201).json({ mensagem: "Cartao criado com sucesso!", cartoes });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ mensagem: "Erro ao criar o cartao" });
    }
});
// Rota para listar todos os cartoes
router.get('/cartao', (req, res) => {
    const cartoess = cartoes.map((cartao) => {
        return {
            cartao,
            l: '==========================================',
        };
    });
    res.json(cartoess);
});
// Rota para listar um cartao pelo id
router.get("/cartao/:id", (req, res) => {
    const id = Number(req.params.id);
    const cartao = cartoes.find((cartao) => cartao.getIdCartao() === id);
    if (cartao) {
        res.json(cartao);
    }
    else {
        res.status(404).json({ mensagem: "Cartao não encontrado!" });
    }
});
// Rota para atualizar um cartao pelo id
router.put("/cartao/:id", (req, res) => {
    const id = Number(req.params.id);
    const { numero, codigo, operadora } = req.body;
    const cartao = cartoes.find((cartao) => cartao.getIdCartao() === id);
    if (cartao) {
        cartao.setNumero(numero);
        cartao.setCodigo(codigo);
        cartao.setOperadora(operadora);
        res.json({ mensagem: "Cartao atualizado com sucesso!", cartoes });
    }
    else {
        res.status(404).json({ mensagem: "Cartao não encontrado!" });
    }
});
// Rota para deletar um cartao pelo id
router.delete("/cartao/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = cartoes.findIndex((cartao) => cartao.getIdCartao() === id);
    if (index === -1) {
        res.status(404).json({ mensagem: "Cartao não encontrado!" });
    }
    else {
        cartoes.splice(index, 1);
        res.json({ mensagem: "Cartao deletado com sucesso!", cartoes });
    }
});
exports.default = router;
