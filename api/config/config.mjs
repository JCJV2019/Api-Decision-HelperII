export default {
    //MONGODB_URI:'mongodb://localhost:27017/Decision_Helper'
    //MONGODB_URI:'mongodb+srv://BackEnd:GCR03112019@cluster0-iatsw.mongodb.net/Decision_Helper?retryWrites=true&w=majority'
}

/*
Carlos:PapaCarlos
BackEnd:GCR03112019 

Indices creados
---------------
db.usuarios.createIndex({"email":1},{unique:true})
db.preguntas.createIndex({"question":1})
db.positivos.createIndex({"user":1})
db.positivos.createIndex({"question":1})
db.negativos.createIndex({"user":1})
db.negativos.createIndex({"question":1})
*/