USE db_loja_infocell;

-- Desabilitar as restrições de chave estrangeira para evitar erros de exclusão
SET foreign_key_checks = 0;

-- Apagar dados de todas as tabelas
DELETE FROM itens_pedido;
DELETE FROM pagamentos;
DELETE FROM pedidos;
DELETE FROM clientes;
DELETE FROM produtos;
DELETE FROM estoque;
DELETE FROM servicos;
DELETE FROM fornecedores;
DELETE FROM usuarios;
DELETE FROM categorias;
DELETE FROM relatorios;

-- Reabilitar as restrições de chave estrangeira
SET foreign_key_checks = 1;

-- Mensagem de confirmação
SELECT 'Todos os dados foram apagados com sucesso.' AS resultado;
