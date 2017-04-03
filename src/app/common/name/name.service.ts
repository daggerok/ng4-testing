import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NameService {
  public generate(name: string = 'buddy'): Observable<string> {
    return Observable.of(`hello, ${name}!`);
  }
}
