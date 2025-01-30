const connection = require('../configuracoes/bancoDeDados');

// Função para criar um produto
function createProduto(nomeProduto, descricaoCurta, descricaoDetalhada, preco, idCategoria, imagem, callback) {
    const query = 'INSERT INTO produtos (nome_produto, descricao_curta, descricao_detalhada, preco, id_categoria, imagem) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(query, [nomeProduto, descricaoCurta, descricaoDetalhada, preco, idCategoria, imagem], (err, result) => {
        if (err) {
            console.error('Erro ao inserir produto:', err);
            return callback(err);
        }
        console.log('Produto inserido com sucesso, ID:', result.insertId);
        callback(null, result);
    });
}

// Read - Selecionar todos os produtos
function readProdutos(callback) {
    const query = 'SELECT * FROM produtos';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Erro ao selecionar produtos:', err);
            return callback(err, null);
        }
        console.log('Produtos encontrados:', results);
        callback(null, results);
    });
}

// Função para atualizar um produto
function updateProduto(idProduto, nomeProduto, descricaoCurta, descricaoDetalhada, preco, idCategoria, imagem, callback) {
    const query = 'UPDATE produtos SET nome_produto = ?, descricao_curta = ?, descricao_detalhada = ?, preco = ?, id_categoria = ?, imagem = ? WHERE id_produto = ?';
    connection.query(query, [nomeProduto, descricaoCurta, descricaoDetalhada, preco, idCategoria, imagem, idProduto], (err, result) => {
        if (err) {
            console.error('Erro ao atualizar produto:', err);
            return callback(err);
        }
        if (result.affectedRows === 0) {
            console.log('Nenhum produto encontrado para atualizar.');
            return callback(null, null);
        }
        console.log('Produto atualizado com sucesso, ID:', idProduto);
        callback(null, result);
    });
}

// Função para excluir um produto
function deleteProduto(idProduto, callback) {
    const query = 'DELETE FROM produtos WHERE id_produto = ?';
    connection.query(query, [idProduto], (err, result) => {
        if (err) {
            console.error('Erro ao excluir produto:', err);
            return callback(err);
        }
        if (result.affectedRows === 0) {
            console.log('Nenhum produto encontrado para excluir.');
            return callback(null, null);
        }
        console.log('Produto excluído com sucesso, ID:', idProduto);
        callback(null, result);
    });
}

module.exports = { createProduto, readProdutos, updateProduto, deleteProduto };