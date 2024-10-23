import express from 'express';

const app = express();
const PORT = 3000;


app.get('/profile', (req, res) => {
    const edad = req.query.edad;
    console.log(`Edad recibida: ${edad}`);
    res.send(`Edad del perfil: ${edad}`);
})



app.listen(PORT, () => {
    console.log(`servidor escuchando en localhost://${PORT}`);
})

//ejemplo de uso http://localhost:3000/profile?edad=30