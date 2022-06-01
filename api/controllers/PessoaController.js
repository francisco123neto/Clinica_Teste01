const database = require('../models')
const bcrypt = require("bcrypt")

class PessoaController {
    static async pegaTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
        } catch {
            return res.status(500).json(error.message)
        }

    }

    static async pegaUmaPessoa(req, res) {
        const { id } = req.params
        try {
            const umaPessoa = await database.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umaPessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async criaPessoa(req, res) {
        const saltRounds = 10
        const {nome, cpf, nascimento, tipoSanguineo, sexo, statusPessoa, email, senha} = req.body
        try {
            const hashSenha = await bcrypt.hash(senha, saltRounds)
            const novaPessoaCriada = await database.Pessoas.create({nome, cpf, nascimento, 
                tipoSanguineo, sexo, statusPessoa, email, senha: hashSenha})
            return res.status(200).json(novaPessoaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }


    static async atualizaPessoa(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Pessoas.update(novasInfos, {
                where: { id: Number(id) }
            })
            const pessoaAtualizada = await database.Pessoas.findOne({
                where: { id: Number(id) }
            })
            return res.status(200).json(pessoaAtualizada)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaPessoa(req, res) {
        const { id } = req.params
        try {
            await database.Pessoas.destroy({
                where: { id: Number(id) }
            })
            return res.status(200).json({mensagem: `id ${id} deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = PessoaController