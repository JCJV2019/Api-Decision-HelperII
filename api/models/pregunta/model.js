import mongoose from 'mongoose';
import preguntaSchema from './schema.js';

export default mongoose.model("Preguntas", preguntaSchema);
