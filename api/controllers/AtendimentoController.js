const database = require('../models')

class AtendimentoController {
    static async pegaTodosOsAtendimentos(req, res) {
        try {
            const todosOsAtendimentos = await database.Atendimento.findAll()
            return res.status(200).json(todosOsAtendimentos)
        } catch {
            return res.status(500).json(error.message)
        }

    }

    static async pegaUmAtendimento(req, res) {
        const { id } = req.params
        try {
            const umAtendimento = await database.Atendimento.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umAtendimento)
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async criaAtendimento(req, res) {
        const novoAtendimento = req.body
        try {
            const novoAtendimentoCriado = await database.Atendimento.create(novoAtendimento)
            return res.status(200).json(novoAtendimentoCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }


    static async atualizaAtendimento(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Atendimento.update(novasInfos, {
                where: { id: Number(id) }
            })
            const atendimentoAtualizado = await database.Atendimento.findOne({
                where: { id: Number(id) }
            })
            return res.status(200).json(atendimentoAtualizado)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaAtendimento(req, res) {
        const { id } = req.params
        try {
            await database.Atendimento.destroy({
                where: { id: Number(id) }
            })
            return res.status(200).json({mensagem: `id ${id} deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = AtendimentoController