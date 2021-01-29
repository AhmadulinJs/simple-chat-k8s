import { Request, Response, NextFunction } from 'express'
import User, { IUser } from '../../../../models/User'
import { ApiResponse } from '../../../../lib/ApiResponse'
export default class {
  constructor() {

  }
  async login() {

  }

  async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      const existingUser: IUser = await User.findOne({ email: req.body.email });

      if (existingUser) {
        return new ApiResponse(res).error(400, 'USER_EXIST')
      }
      const savedUser: IUser = await User.create(req.body)
      return new ApiResponse(res).success(savedUser);
      console.log('hello')
    } catch (e) {

    }
  }
}