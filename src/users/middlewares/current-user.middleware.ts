import { Injectable, NestMiddleware, NotFoundException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

import { UsersService } from '../users.service';
@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  constructor(private readonly usersService: UsersService) {}
  async use(req: any, res: any, next: NextFunction) {
    const { userId } = req.session || {};
    if (userId) {
      const user = await this.usersService.findOne(userId);
      //@ts-ignore
      req.currentUser = user;
    }throw new NotFoundException("No User found")
    next();
  }
}
