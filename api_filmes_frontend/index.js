const express = require('express');

const app = express();
const axios = require('axios').default;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/cadastroCategoriasFilmes', (req, res)=>{
    res.render('categoria/index');
});

app.get('/listagemCategoriasFilmes', (req, res)=>{
    
    const urlListagemCategoria = 'http://localhost:3000/listarCategoriaFilmes';

    axios.get(urlListagemCategoria)
        .then(
            (response)=>{
        
                let categorias = response.data;
                res.render('categoria/listagemCategoriaFilmes', {categorias});

        }); 
    });

    app.get('/formEdicaoCategoriasFilmes/:id', (req, res)=>{
        
        let {id} = req.params;
       
        const urlListagemCategoria = `http://localhost:3000/listarCategoriaFilmes/${id}`;
        
        axios.get(urlListagemCategoria)
        .then(
            (response)=>{

                let categoria = response.data;
                res.render('categoria/editarCategoriaFilmes', {categoria});

            }
        )
    });

    app.post('/alterarCategoriaFilmes', (req, res)=>{

        const urlAlterarCategoria = 'http://localhost:3000/alterarCategoriaFilmes';
        console.log(req.body);

        axios.put(urlAlterarCategoria, req.body)
        .then(
            res.send('ALTERADO!')
        )

    });

    app.get ('/deletarCategoriaFilmes/:id',(req, res)=>{
        let id = req.params.id;
        const urlDeletarCategoria = `http://localhost:3000/excluirCategoriaFilmes/${id}`;
        axios.delete(urlDeletarCategoria, req.body)
        .then(
            res.send('DELETADO')
        )});
    
app.listen(3001, ()=>{
    console.log('SERVIDOR RODANDO EM: http://localhost:3001');
});