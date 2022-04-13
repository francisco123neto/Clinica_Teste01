const {Router} = require('express')

const AtendimentoController = require('../controllers/AtendimentoController')

const router = Router()

router.get('/atendimentos', AtendimentoController.pegaTodosOsAtendimentos)
router.get('/atendimentos/:id', AtendimentoController.pegaUmAtendimento)
router.post('/atendimentos', AtendimentoController.criaAtendimento)
router.put('/atendimentos/:id', AtendimentoController.atualizaAtendimento)
router.delete('/atendimentos/:id', AtendimentoController.deletaAtendimento)

module.exports = router