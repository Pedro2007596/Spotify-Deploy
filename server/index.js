import express from 'express';
import conectaNaDb from './db.js';
import cors from 'cors';
import artistas from './models/Artistas.js';
import genero from './models/Generos.js';
import novoArtista from './models/NovoArtistas.js';

const app = express();
app.use(cors(
    {
        origin: 'spotify-deploy-front.vercel.app',
        methods: ["POST", "GET"],
        credentials: true
    }
), express.json());
const conexao = await conectaNaDb();

conexao.on('error', (erro) => { 
    console.error('Erro ao conectar no MongoDB', erro);
});

conexao.once('open', () => {
    console.log('Conectado no MongoDB');
});

app.get('/', (req, res) => {
    res.send('Olá API!');
});

app.get('/artistas', async (req, res) => {
    const listaArtistas = await artistas.find({});
    res.status(200).json(listaArtistas);
});

app.get('/generos', async (req, res) => {
    const listaGeneros = await genero.find({});
    res.status(200).json(listaGeneros);
});

app.get('/novoArtistas', async (req, res) => {
    const listaNovoArtistas = await novoArtista.find({});
    res.status(200).json(listaNovoArtistas);
});

app.get('/artistas/:id', async (req, res) => {
    const { id } = req.params;
    const artista = await artistas.findById(id);
    res.status(200).json(artista);
});


app.post('/artistas', async ( req, res) => {
    const novoArtista = new artistas(req.body);
    const artistaSalvo = await novoArtista.save();
    res.status(201).json(artistaSalvo);
})

app.delete('/artistas/:id', async (req, res) => {
    const { id } = req.params;
    await artistas.findByIdAndDelete(id);
    res.status(204).end();
});

app.put('/artistas/:id', async (req, res) => {
    const { id } = req.params;
    const artistaAtualizado = req.body;
    await artistas.findByIdAndUpdate(id, artistaAtualizado);
    res.status(200).end();
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});