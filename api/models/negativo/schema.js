import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const negativoSchema = new Schema({
  //_id: Schema.ObjectId,
  desc: { type: String, required: true },
  point:{ type: String, required: true },
  question: {type: Schema.ObjectId,ref:'Pregunta'},
  user: {type: Schema.ObjectId,ref:'Usuario'}
});

export default negativoSchema;