import mongoose from "mongoose";
const artistaSchema = new mongoose.Schema({
 id: {type: mongoose.Schema.Types.ObjectId},
 name: {type: String, required: true},
 bio: {type: String},
 genres: [{type: String, required: true}], // Array de gêneros musicais
 albums: [{type: mongoose.Schema.Types.ObjectId, ref: 'albums'}], // Referência aos álbuns
 followers: [{type: mongoose.Schema.Types.ObjectId, ref: 'users'}], // Referência aos seguido
 image: {type: String}, // URL da imagem do artista
 created_at: {type: Date, default: Date.now}
}, {versionKey: false});
const artistas = mongoose.model('artistas', artistaSchema);

export default artistas;
