import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class HttpGreetingService {
  constructor(private http: Http) {}
  public sayHiHttp(): Observable<any> {
    return this.http.get('/watever')
      .map(resp => resp.json())
      .map(json => json.name)
      .map(name => `hello, ${name}!`);
  }
}
