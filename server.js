const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/exoplanets', async (req, res) => {
    try {
        const url = "https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+pl_name,pl_rade,pl_dens,pl_eqt+from+ps&format=csv";
        const response = await axios.get(url);
        res.send(response.data);
    } catch (error) {
        res.status(500).send({ error: "Erro ao buscar os dados." });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
