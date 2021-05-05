import { Request, Response, NextFunction } from 'express'
import logging from '../config/logging'

const NAMESPACE = 'Inicio Controller'

const getIndexPage = (req: Request, res: Response, next: NextFunction) => {
    res.render('index', { title: 'descargasxtech' })
}

export default { getIndexPage }
