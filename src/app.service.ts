import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Celestial Ascent RPG Server is running!';
  }
}
