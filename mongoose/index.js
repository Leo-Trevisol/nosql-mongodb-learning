// Conexão mongoose com o MongoDB
const mongoose = require('mongoose');

// Conecta ao banco de dados MongoDB usando Mongoose.
mongoose.connect('mongodb://localhost/test')
  .then(() => console.log("Connected to MongoDB with Mongoose!"))
  .catch(err => console.error("Connection error:", err));

const db = mongoose.connection;

// Evento de erro na conexão.
db.on('error', console.error.bind(console, 'connection error:'));

// Evento de sucesso na conexão.
db.once('open', function() {
    console.log('Connected to MongoDB with Mongoose!');
});

//Criando um schema para as pessoa

const pessoaSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    profissao: String
});

//Criaando model

const pessoaModel = mongoose.model('Pessoa', pessoaSchema);

const leo = new pessoaModel({
    nome: 'Leonardo',
    idade: 22,
    profissao: 'Desenvolvedor'
});

console.log(leo);

// Salvando no banco de dados

leo.save()
    .then(() => console.log('Pessoa salva no banco de dados!'))
    .catch(err => console.error('Erro ao salvar pessoa:', err));

//Encontrando pessoas no banco de dados

pessoaModel.find({ nome: 'Leonardo' })
    .then(pessoas => console.log('Pessoas encontradas:', pessoas))
    .catch(err => console.error('Erro ao encontrar pessoas:', err));


//Inserindo várias pessoas

pessoaModel.insertMany([
    { nome: 'Ana', idade: 28, profissao: 'Designer' },
    { nome: 'Carlos', idade: 35, profissao: 'Gerente' },    
    { nome: 'Mariana', idade: 30, profissao: 'Engenheira' }
])
    .then(() => console.log('Múltiplas pessoas inseridas!'))
    .catch(err => console.error('Erro ao inserir múltiplas pessoas:', err));

//Resgatando pessoas com profissão Desenvolvedor
    async function getPessoa() {
        const pessoas = await pessoaModel.find({ profissao: 'Desenvolvedor' });
        console.log('Pessoas com a profissão Desenvolvedor:', pessoas);
    }

    async function getPessoa(nome) {
        const pessoa = await pessoaModel.findOne({ nome: nome });
        if(pessoa.lenght === 0) {
            console.log(`Nenhuma pessoa encontrada com o nome ${nome}`);
        } else {
            return pessoa;
        }
    }

getPessoa("Leonardo").then(pessoa => {
    if(pessoa) {
        console.log('Pessoa encontrada:', pessoa);
    }   
}).catch(err => console.error('Erro ao buscar pessoa:', err));


//Deletando uma pessoa

pessoaModel.deleteOne({ nome: 'Leonardo' })
    .then(() => console.log('Pessoa deletada!'))
    .catch(err => console.error('Erro ao deletar pessoa:', err));

getPessoa("Leonardo").then(pessoa => {
    if(pessoa) {
        console.log('Pessoa encontrada:', pessoa);
    }   
}).catch(err => console.error('Erro ao buscar pessoa:', err));


//Atualizando uma pessoa

pessoaModel.updateOne({ nome: 'Ana' }, { idade: 29 })
    .then(() => console.log('Pessoa atualizada!'))
    .catch(err => console.error('Erro ao atualizar pessoa:', err));

    getPessoa("Ana").then(pessoa => {
        if(pessoa) {
            console.log('Pessoa encontrada:', pessoa);
        }   
    }).catch(err => console.error('Erro ao buscar pessoa:', err));

//Utilizando o where

async function getPessoaNomeIdade(nome, idade) {
    const pessoa = await pessoaModel.where('nome').equals(nome).where('idade').equals(idade).exec();

    if(pessoa.lenght === 0) {
        console.log(`Nenhuma pessoa encontrada com o nome ${nome} e idade ${idade}`);
    } else {
        return pessoa;
    }
}
        


