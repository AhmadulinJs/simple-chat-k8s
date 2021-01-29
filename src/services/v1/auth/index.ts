import { Router } from 'express'
import { validate } from '../../../middlewares/requestValidator';
import schema from './requestSchma'
import AuthController from './controllers/AuthController'

const authController = new AuthController()
const router = Router({ mergeParams: true })

router.route('/register')
  .post(validate(schema.signUp), authController.signUp)

export default router;