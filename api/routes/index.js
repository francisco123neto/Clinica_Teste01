const express = require('express')
const pessoas = require('./pessoasRoute')
const atendimentos = require('./atendimentosRoute')
const prontuarios = require('./prontuariosRouter')
const enfermidades = require('./enfermidadesRouter')

module.exports = app =>{
    app.use(express.json())
    app.use(pessoas)
    app.use(atendimentos)
    app.use(prontuarios)
    app.use(enfermidades)
}