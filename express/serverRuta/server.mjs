import express from 'express';


const app = express();
const PORT = 3000;

app.get('/user/:id', (req, res) => {
    const userID = req.params.id;
    console.log(`Id del usuario recibido : ${userID}`);
    res.send(`Perfil del usuario con ID : ${userID}`);
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en : http://localhost:${PORT}`);
})