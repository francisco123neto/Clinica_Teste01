const {Router} = require('express')

const ProntuarioController = require('../controllers/ProntuarioController')

const router = Router()

router.get('/prontuarios', ProntuarioController.pegaTodosOsProntuarios)
router.get('/prontuarios/:id', ProntuarioController.pegaUmProntuario)
router.post('/prontuarios', ProntuarioController.criaProntuario)
router.put('/prontuarios/:id', ProntuarioController.atualizaProntuario)
router.delete('/prontuarios/:id', ProntuarioController.deletaProntuario)

module.exports = router