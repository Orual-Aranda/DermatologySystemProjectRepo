const app = require('./app');
const {
    IP_SERVER,
    API_VERSION,
} = require('./constants');

const PORT = process.env.POST || 3977;

app.listen(PORT, () => {
    console.log('################################');
    console.log(`Servidor HTTP iniciado en el puerto ${PORT}`);
    console.log(`http://${IP_SERVER}:${PORT}/api/${API_VERSION}`);
})