import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

interface Response<T> {
  result: T;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler<T>): Observable<any> {
    return next.handle().pipe(
      catchError((err) => {
        let status = HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Internal server error';
        let data = null;
        if (err instanceof HttpException) {
          status = err.getStatus();
          message = err.message;
          data = err.getResponse();
        } else if (err instanceof Error) {
          data = err.message;
        }
        const errorResponse = {
          statusCode: status,
          message: message,
          data: data,
          timestamp: new Date().toISOString(),
          // path: context.switchToHttp().getRequest().url,
        };
        return throwError(new HttpException(errorResponse, status));
      }),
      map((data) => ({
        data,
        statusCode: 200,
      })),
    );
  }
}
