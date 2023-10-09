"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clienteController_1 = __importDefault(require("./controller/clienteController"));
const cartaoController_1 = __importDefault(require("./controller/cartaoController"));
const reservaController_1 = __importDefault(require("./controller/reservaController"));
const server = (0, express_1.default)();
server.use(express_1.default.json());
const porta = 8000;
server.listen(porta, () => {
    console.log(`Servidor rodando na porta http://localhost:${porta}`);
});
server.use(clienteController_1.default);
server.use(cartaoController_1.default);
server.use(reservaController_1.default);
