const database = require('../models')

class EnfermidadeController {
    static async pegaTodasAsEnfermidades(req, res) {
        try {
            const todasAsEnfermidades = await database.Enfermidades.findAll()
            return res.status(200).json(todasAsEnfermidades)
        } catch {
            return res.status(500).json(error.message)
        }

    }

    static async pegaUmaEnfermidade(req, res) {
        const { id } = req.params
        try {
            const umaEnfermidade = await database.Enfermidades.findOne({
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
            const novaEnfermidadeCriada = await database.Enfermidades.create(novaEnfermidade)
            return res.status(200).json(novaEnfermidadeCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }


    static async atualizaEnfermidade(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Enfermidades.update(novasInfos, {
                where: { id: Number(id) }
            })
            const enfermidadeAtualizada = await database.Enfermidades.findOne({
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
            await database.Enfermidades.destroy({
                where: { id: Number(id) }
            })
            return res.status(200).json({mensagem: `id ${id} deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = EnfermidadeController