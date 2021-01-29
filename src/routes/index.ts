import { NextFunction, Router } from 'express'
const router = Router({ mergeParams: true })
import authRoutes from '../services/v1/auth'


router.use('/auth',authRoutes);

export default router;