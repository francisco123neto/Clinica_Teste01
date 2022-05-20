const database = require('../models')

class ProntuarioController {
    static async pegaTodosOsProntuarios(req, res) {
        try {
            const todosOsProntuarios = await database.Prontuario.findAll()
            return res.status(200).json(todosOsProntuarios)
        } catch {
            return res.status(500).json(error.message)
        }

    }

    static async pegaUmProntuario(req, res) {
        const { id } = req.params
        try {
            const umProntuario = await database.Prontuario.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umProntuario)
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async criaProntuario(req, res) {
        const novoProntuario = req.body
        try {
            const novoProntuarioCriado = await database.Prontuario.create(novoProntuario)
            return res.status(200).json(novoProntuarioCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }


    static async atualizaProntuario(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Prontuario.update(novasInfos, {
                where: { id: Number(id) }
            })
            const prontuarioAtualizado = await database.Prontuario.findOne({
                where: { id: Number(id) }
            })
            return res.status(200).json(prontuarioAtualizado)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaProntuario(req, res) {
        const { id } = req.params
        try {
            await database.Prontuario.destroy({
                where: { id: Number(id) }
            })
            return res.status(200).json({mensagem: `id ${id} deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = ProntuarioController