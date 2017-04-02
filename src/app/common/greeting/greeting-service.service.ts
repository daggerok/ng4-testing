import { Injectable } from '@angular/core';

@Injectable()
export class GreetingServiceService {
  public sayHi(name: string = 'buddy'): string {
    return `hello, ${name}!`;
  }
}
