const express = require('express');
console.log('TESTE DO GITHUBDESKTOPO');

const categoriaController = require('./controller/CategoriaController');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', categoriaController);

app.listen(3000, ()=>{
    console.log('Servidor Executando em: http://localhost:3000');
});