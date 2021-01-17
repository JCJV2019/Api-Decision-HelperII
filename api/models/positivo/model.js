import mongoose from 'mongoose';
import positivoSchema from './schema.js';

export default mongoose.model("Positivos", positivoSchema);