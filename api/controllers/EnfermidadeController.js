const database = require('../models')

class EnfermidadeController {
    static async pegaTodasAsEnfermidades(req, res) {
        try {
            const todasAsEnfermidades = await database.Enfermidade.findAll()
            return res.status(200).json(todasAsEnfermidades)
        } catch {
            return res.status(500).json(error.message)
        }

    }

    static async pegaUmaEnfermidade(req, res) {
        const { id } = req.params
        try {
            const umaEnfermidade = await database.Enfermidadee.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umaEnfermidade)
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async criaEnfermidade(req, res) {
        const novaEnfermidade = req.body
        try {
            const novaEnfermidadeCriada = await database.Enfermidade.create(novaEnfermidade)
            return res.status(200).json(novaEnfermidadeCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }


    static async atualizaEnfermidade(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Enfermidade.update(novasInfos, {
                where: { id: Number(id) }
            })
            const enfermidadeAtualizada = await database.Enfermidade.findOne({
                where: { id: Number(id) }
            })
            return res.status(200).json(enfermidadeAtualizada)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaEnfermidade(req, res) {
        const { id } = req.params
        try {
            await database.Enfermidade.destroy({
                where: { id: Number(id) }
            })
            return res.status(200).json({mensagem: `id ${id} deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = EnfermidadeController