const express = require("express");

const app = express();

const port = 3001;

const livros = require('./livros');

app.use('/livros', livros);

const log = (req, res, next) =>{
    console.log(`..................... Acessado em ${new Date()}`);
    next();
};

app.get("/transfere", log, (req, res) =>{
    res.send("Ok! Valor Transferido com Sucesso");
}); 

app.use(log);
app.get("/", (req, res) =>{
    res.send("Olá... Bem-Vindo!");
});

app.get("/cap12", (req, res) =>{
    res.send("<h2>Capítulo 12: Introdução ao Express</h2>");
});

app.use(express.json());
app.post("/filmes", (req, res) =>{
    const {titulo, genero} = req.body;
    res.send(`Filme: ${titulo} - Gênero: ${genero}, recebido...`);
});

app.listen(port, () =>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});