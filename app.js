require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'frontend/public')));

// Middleware para permitir parsing de JSON no corpo da requisição
app.use(express.json());


// Rota principal para servir a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/public/index.html'));
});

// Rota para  pagina de cadastrar um novo produto
app.get('/cadastro-produto', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/src/paginas/cadastroProduto.html'));
});

// Importar a função de criação  e leitura de produtos
const { createProduto } = require('./backend/crud/crudProdutos');
const { readProdutos } = require('./backend/crud/crudProdutos');


// Rota para cadastro de produto (API)
app.post('/api/produtos', (req, res) => {
    const { nomeProduto, descricaoCurta, descricaoDetalhada, preco, idCategoria, imagem } = req.body;

    if (!nomeProduto || !descricaoCurta || !descricaoDetalhada || !preco || !idCategoria) {
        return res.status(400).json({ success: false, error: 'Campos obrigatórios não fornecidos.' });
    }

    createProduto(nomeProduto, descricaoCurta, descricaoDetalhada, preco, idCategoria, imagem)
        .then(() => res.status(201).json({ success: true }))
        .catch(err => {
            console.error('Erro ao cadastrar produto:', err);
            res.status(500).json({ success: false, error: 'Erro ao cadastrar produto' });
        });
});

// Rota para listar produtos
// app.get('/api/produtos', (req, res) => {
//     console.log('Consultando produtos...');
//     readProdutos((err, results) => {
//         if (err) {
//             return res.status(500).json({ error: 'Erro ao consultar produtos' });
//         }
//         res.status(200).json(results);
//     });
// });

// Rotas de Teste
// Função para testar todas as operações CRUD
const testCRUD = async () => {
    try {
        // Teste de criação de um produto
        console.log('Testando criação de produto...');
        await new Promise((resolve, reject) => {
            createProduto('Produto de Teste', 'Descrição curta', 'Descrição detalhada', 100.50, 1, 'imagem.jpg', (err, result) => {
                if (err) {
                    console.error('Erro na criação do produto:', err);
                    reject(err);
                } else {
                    console.log('Produto criado com sucesso:', result);
                    resolve(result);
                }
            });
        });

        // Teste de leitura de produtos
        console.log('Testando leitura de produtos...');
        await new Promise((resolve, reject) => {
            readProdutos((err, produtos) => {
                if (err) {
                    console.error('Erro na leitura de produtos:', err);
                    reject(err);
                } else {
                    console.log('Produtos lidos com sucesso:', produtos);
                    resolve(produtos);
                }
            });
        });

        // Teste de atualização de um produto (use o ID de um produto existente)
        console.log('Testando atualização de produto...');
        await new Promise((resolve, reject) => {
            updateProduto(9, 'Produto Atualizado', 'Descrição atualizada', 'Detalhes atualizados', 120.75, 1, 'nova_imagem.jpg', (err, result) => {
                if (err) {
                    console.error('Erro na atualização do produto:', err);
                    reject(err);
                } else {
                    console.log('Produto atualizado com sucesso:', result);
                    resolve(result);
                }
            });
        });

        // Teste de exclusão de um produto (use o ID de um produto existente)
        console.log('Testando exclusão de produto...');
        await new Promise((resolve, reject) => {
            deleteProduto(9, (err, result) => {
                if (err) {
                    console.error('Erro na exclusão do produto:', err);
                    reject(err);
                } else {
                    console.log('Produto excluído com sucesso:', result);
                    resolve(result);
                }
            });
        });
    } catch (error) {
        console.error('Erro ao testar CRUD de produtos:', error);
    }
};

// Chamar a função de teste
testCRUD();

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
