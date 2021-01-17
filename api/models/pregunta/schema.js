import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const preguntaSchema = new Schema({
  //_id: Schema.ObjectId,
  question: { type: String, required: true },
  user: {type: Schema.ObjectId,ref:'Usuario'}
});


export default preguntaSchema;