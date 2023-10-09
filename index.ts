import express from "express";
import clienteController from "./controller/clienteController";
import cartaoController from "./controller/cartaoController";
import reservaController from "./controller/reservaController";

const server = express();
server.use(express.json());

const porta = 8000;
server.listen(porta, () => {
    console.log(`Servidor rodando na porta http://localhost:${porta}`);
});

server.use(clienteController);
server.use(cartaoController);
server.use(reservaController);




