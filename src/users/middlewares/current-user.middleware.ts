import { Injectable, NestMiddleware, NotFoundException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

import { UsersService } from '../users.service';
import { AppRequest } from 'src/types/app-request.type';
@Injectable() 
export class CurrentUserMiddleware implements NestMiddleware {
  constructor(private readonly usersService: UsersService) {}
  async use(req: AppRequest, res: any, next: NextFunction) {


    const { userId } = req.session || {};
    
    if (!userId) {
      throw new NotFoundException('No user id provided ');
    } else {
      const user = await this.usersService.findOne(userId);
      req.currentUser = user;

    }

    next();
  }
}
