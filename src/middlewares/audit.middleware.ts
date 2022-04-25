import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuditMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`Request endpoint IP: ${req.ip}`);
    console.log(`Request endpoint Path: ${req.path}`);

    next();
  }
}
