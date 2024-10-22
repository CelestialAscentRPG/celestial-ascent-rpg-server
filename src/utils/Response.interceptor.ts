import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
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
      catchError((err) => throwError(err)),
      map((data) => ({
        data,
        statusCode: 200,
      })),
    );
  }
}
