import express from 'express'
import controller from '../controllers/inicio.controller'

const router = express.Router()

router.get('/', controller.getIndexPage)

export = router
