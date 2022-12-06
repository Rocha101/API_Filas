const mongoose = require('mongoose'); //


const DataSchema = new mongoose.Schema({
    nome_usuario: String,
    email_usuario: String,
    horario_usuario: String,
    senha_usuario: String
},{
    timestamps:true
});

DataSchema.pre('save', function(next){
    if(!this.isModified("senha_usuario")){
        return next();
    }
    next();
})

DataSchema.pre('findOneAndUpdate', function(next){
    var password = this.getUpdate().senha_usuario+'';
    next();
})

const usuarios = mongoose.model("usuarios", DataSchema);
module.exports = usuarios;