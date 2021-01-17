import mongoose from 'mongoose';
import usuarioSchema from './schema.js';

export default mongoose.model("Usuarios", usuarioSchema);