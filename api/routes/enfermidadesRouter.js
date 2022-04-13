const {Router} = require('express')

const EnfermidadeController = require('../controllers/EnfermidadeController')

const router = Router()

router.get('/enfermidades', EnfermidadeController.pegaTodasAsEnfermidades)
router.get('/enfermidades/:id', EnfermidadeController.pegaUmaEnfermidade)
router.post('/enfermidades', EnfermidadeController.criaEnfermidade)
router.put('/enfermidades/:id', EnfermidadeController.atualizaEnfermidade)
router.delete('/enfermidades/:id', EnfermidadeController.deletaEnfermidade)

module.exports = router