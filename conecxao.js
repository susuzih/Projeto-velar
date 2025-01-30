require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

const client = require('././funçoes/configuracoes/twilio.config.js'); // Importando o cliente Twilio


app.post('/enviar-whatsapp', (req, res) => {
    const { numero, mensagem } = req.body;

    // Enviar a mensagem no WhatsApp via Twilio
    client.messages
        .create({
            from:+14155238886,// Número do sandbox do Twilio
            body: mensagem, // Mensagem que foi enviada
            to: `whatsapp:${+14155238886}` // Número de telefone do destinatário (passado via request)
        })
        .then(message => {
            console.log(`Mensagem enviada! SID: ${message.sid}`);
            res.status(200).json({ success: true, sid: message.sid });
        })
        .catch(error => {
            console.error("Erro ao enviar mensagem: ", error);
            res.status(500).json({ success: false, error: error.message });
        });
});

// Rota principal (quando acessada diretamente pelo navegador)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/paginas/envioWhatsapp.html'));
});

module.exports = client;