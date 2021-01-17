import mongoose from 'mongoose';
import negativoSchema from './schema.js';

export default mongoose.model("Negativos", negativoSchema);