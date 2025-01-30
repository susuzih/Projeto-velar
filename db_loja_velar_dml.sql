-- Seleciona o banco de dados a ser usado
USE db_loja_velar;

-- Inserção de dados na tabela de usuários
INSERT INTO usuarios (nome, email, senha, tipo, data_criacao) VALUES
('Alice Silva', 'alice.silva@email.com', 'senha123', 'cliente', NOW()),
('Carlos Pereira', 'carlos.pereira@email.com', 'senha123', 'funcionario', NOW()),
('Maria Oliveira', 'maria.oliveira@email.com', 'senha123', 'admin', NOW()),
('José Santos', 'jose.santos@email.com', 'senha123', 'cliente', NOW()),
('Lucia Costa', 'lucia.costa@email.com', 'senha123', 'cliente', NOW());

-- Inserção de dados na tabela de clientes
INSERT INTO clientes (id_usuario, endereco, telefone) VALUES
(1, 'Rua das Flores, 123', '123456789'),
(2, 'Avenida Central, 456', '987654321'),
(3, 'Rua dos Limoeiros, 789', '564738291'),
(4, 'Praça da República, 101', '1122334455'),
(5, 'Avenida Brasil, 202', '9988776655');

-- Inserção de dados na tabela de categorias
INSERT INTO categorias (nome_categoria, descricao) VALUES
('Maquiagem', 'Produtos de maquiagem de alta qualidade '),
('Skin Care', 'Produtos de tratamento para a pele');

-- Inserção de dados na tabela de produtos
INSERT INTO produtos (nome_produto, descricao_curta, descricao_detalhada, codigo_produto, preco, cor, tamanho, modelo, id_categoria) VALUES
('Kit Mini Batom Vermelho + Mini Brilho Labial Nude Océane Edition (2 Produtos)', 'kit de batom e gloss', 'O Kit Océane Edition traz 2 produtos em miniatura para criar lábios avermelhos e com brilho.', '1234567891', 96.75, 'vermelho', 'Mini', 'kit', 1),
('Oceane Nádia Tambasco Brow Definer - Deep Brown – Océane', 'máscara para sobrancelha', 'A Máscara de Sobrancelhas Oceane Nádia Tambasco Brow Definer na cor Deep Brown é a solução perfeita para sobrancelhas bem definidas, volumosas e naturais. ', '1234567892', 29.90, 'marrom', 'Mini', 'Máscara ', 1),
('Kit Make Clássica By Ara Soares (5 Produtos)', 'kit de maquiagem completo', 'O Kit Make Clássica by Ara Soares conta com 5 produtos Océane, o kit é perfeito para criar makes clássicas e práticas para sua rotina, com muita fixação e durablidade.', '1234567893', 364.70, 'nude', 'Mini', 'kit', 1),
('Kit Mini Batom Nude + Mini Blush Cremoso Caramelo + Mini Pó Translúcido Solto + Mini Contorno em Bastão Marrom Médio Océane Edition (4 Produtos)', 'kit make simples', 'O Kit Mini Océane Edition traz quatro produtos essenciais para uma maquiagem prática e sofisticada, todos com alta pigmentação, durabilidade e fáceis de esfumar.', '1234567894', 160.90, 'salmon', 'Mini', 'kit', 1),
('Tiege Hanley Kit skincare Masculino', 'kit skincare men', 'Os produtos da Rotina Antienvelhecimento foram desenvolvidos para reduzir os sinais de envelhecimento', '1234567895', 390.80, 'Branco', 'Médio', 'kit', 2),
('Kit Skincare Must Have - Gel de Limpeza Facial + Sérum Facial + Gel Hidratante Facial + Hidratante Labial (4 Produtos)    ', 'kit skincare women', 'O Kit Rotina de Skincare Noturna conta com  produtos que vão manter a sua pele limpa, saudável e hidratada, todos possuem tecnologia desenvolvida na Coreia do Sul.', '1234567896', 260.90, 'amarelo', 'Médio', 'kit', 2),
('Creamy Rotina Acne e Antioleosidade ', 'kit antiacne', 'O Kit Antiacne Pele Oleosa ou Mista é seu aliado na redução de espinhas e cravos. Confira os benefícios e garanta o seu aqui na Creamy.', '1234567897', 277.95, 'Preto', 'Médio', 'kit', 2);


-- Inserção de dados na tabela de estoque
INSERT INTO estoque (id_produto, cor, tamanho, modelo, quantidade, data_atualizacao) VALUES
(1, 'vermelho', 'Mini', 'kit', 10, NOW()),
(2, 'marrom', 'Mini', 'máscara de sobrancelha', 10, NOW()),
(3, 'nude', 'Mini', 'kit', 10, NOW()),
(4, 'salmon', 'Mini', 'kit', 10, NOW()),
(5, 'branco', 'Médio', 'kit', 10, NOW()),
(6, 'amarelo', 'Médio', 'kit', 10, NOW()),
(7, 'preto', 'Médio', 'kit', 10, NOW());

-- Inserção de dados na tabela de fornecedores
INSERT INTO fornecedores (nome_fornecedor, contato, telefone, email) VALUES
('Tech Supplies Ltda', 'João Almeida', '123456789', 'contato@techsupplies.com'),
('Fashion Wear Co.', 'Luciana Martins', '987654321', 'contato@fashionwear.com'),
('SmartTech Inc.', 'Carlos Souza', '564738291', 'contato@smarttech.com'),
('Home Comforts', 'Fernanda Costa', '1122334455', 'contato@homecomforts.com'),
('maquiagemup', 'Roberto Silva', '9988776655', 'contato@maquiageup.com');



-- Inserção de dados na tabela de pedidos
INSERT INTO pedidos (id_cliente, data_pedido, status, total) VALUES
(1, NOW(), 'pendente', 1600.00),
(2, NOW(), 'processando', 120.00),
(3, NOW(), 'enviado', 800.00),
(4, NOW(), 'concluido', 2000.00),
(5, NOW(), 'cancelado', 150.00);

-- Inserção de dados na tabela de itens do pedido
INSERT INTO itens_pedido (id_pedido, id_produto, quantidade, preco_unitario) VALUES
(1, 1, 1, 2500.00),
(2, 2, 2, 1800.00),
(3, 3, 1, 5000.00),
(4, 4, 1, 3000.00),
(5, 5, 1, 100.00),
(5, 6, 1, 350.00);

-- Inserção de dados na tabela de pagamentos
INSERT INTO pagamentos (id_pedido, metodo_pagamento, status_pagamento, data_pagamento) VALUES
(1, 'cartao', 'pendente', NULL),
(2, 'boleto', 'pago', NOW()),
(3, 'pix', 'pago', NOW()),
(4, 'cartao', 'pago', NOW()),
(5, 'boleto', 'cancelado', NULL);

-- Inserção de dados na tabela de relatórios
INSERT INTO relatorios (tipo_relatorio, conteudo, data_criacao) VALUES
('vendas', 'Relatório de vendas do mês de dezembro', NOW()),
('estoque', 'Relatório de controle de estoque', NOW()),
('clientes', 'Relatório de novos clientes cadastrados', NOW()),
('fornecedores', 'Relatório de fornecedores ativos', NOW()),
('vendas', 'Resumo de vendas de produtos eletrônicos', NOW());
