"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cliente_1 = __importDefault(require("../model/cliente"));
const router = express_1.default.Router();
// ==========> CRIANDO Cliente <=============
const clientes = [
    new cliente_1.default(1, "12345678910", "João", "999999999", "Masculino", "Brasileiro", 1),
    new cliente_1.default(2, "98765432100", "Maria", "888888888", "Feminino", "Brasileira", 2),
    new cliente_1.default(3, "11122334455", "Pedro", "777777777", "Masculino", "Brasileiro", 3),
    // Adicione quantos clientes desejar
];
// Rota para criar um novo cliente
router.post("/cliente/new", (req, res) => {
    try {
        const novoCliente = new cliente_1.default(req.body.idCliente, req.body.cpf, req.body.nome, req.body.telefone, req.body.sexo, req.body.nacionalidade, req.body.qtdPessoas);
        clientes.push(novoCliente);
        res.status(201).send('Cliente cadastrado com sucesso!!');
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Erro ao cadastrar cliente");
    }
});
// Rota para buscar todos os clientes
router.get('/cliente', (req, res) => {
    res.send(clientes);
});
// Rota para buscar um cliente por ID
router.get('/cliente/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const cliente = clientes.find((cliente) => cliente.getIdCliente() === id);
    if (cliente) {
        res.send(cliente);
    }
    else {
        res.status(404).send('Cliente não encontrado!');
    }
});
// Rota para atualizar um cliente por ID
router.put('/cliente/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const index = clientes.findIndex((cliente) => cliente.getIdCliente() === id);
        if (index === -1) {
            res.status(404).send('Cliente não encontrado!');
        }
        else {
            const cliente = new cliente_1.default(id, req.body.cpf, req.body.nome, req.body.telefone, req.body.sexo, req.body.nacionalidade, req.body.qtdPessoas);
            clientes.splice(index, 1, cliente);
            res.status(204).send();
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Erro ao atualizar cliente");
    }
});
// Rota para excluir um cliente por ID
router.delete('/cliente/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = clientes.findIndex((cliente) => cliente.getIdCliente() === id);
    if (index === -1) {
        res.status(404).send('Cliente não encontrado!');
    }
    else {
        clientes.splice(index, 1);
        res.status(204).send();
    }
});
exports.default = router;
