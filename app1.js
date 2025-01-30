const express = require('express');
const app = express();

app.listen(3000,()=>{
    console.log("servidor esta rodando na porta 3000");
});

app.get('/', (req,res) =>{ res.send('o servidor esta rodando na porta 3000');
  
});