import { Injectable } from '@angular/core';

@Injectable()
export class GreetingService {
  public sayHi(name: string = 'buddy'): string {
    return `hello, ${name}!`;
  }
}
