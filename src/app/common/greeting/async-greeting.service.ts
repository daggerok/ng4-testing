import { Injectable } from '@angular/core';

@Injectable()
export class AsyncGreetingService {
  public sayHiAsync(name: string = 'buddy') {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(`hello, ${name}!`);
      }, 1000);
    });
  }
}
