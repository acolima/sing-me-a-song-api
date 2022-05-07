import { Router } from 'express'
import { e2eTestsController } from '../controllers/e2eTestsController.js'

const e2eTestsRouter = Router()

e2eTestsRouter.post('/e2e/truncate', e2eTestsController.truncate)

export default e2eTestsRouter
