import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { User } from '../user.entity';
import { AppRequest } from 'src/types/app-request.type';

export const CurrentUser = createParamDecorator((data: never, context: ExecutionContext) => {
  const request: AppRequest = context.switchToHttp().getRequest();
  return request.currentUser;
});
