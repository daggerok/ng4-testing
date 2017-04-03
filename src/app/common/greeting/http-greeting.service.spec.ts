import {
  TestBed,
  inject,
  async
} from '@angular/core/testing';

import { HttpGreetingService } from './http-greeting.service';
import {
  HttpModule,
  XHRBackend,
  Response,
  ResponseOptions,
} from '@angular/http';
import {
  MockBackend,
  MockConnection
} from '@angular/http/testing';

describe('HttpGreetingService', () => {

  let httpGreetingService: HttpGreetingService;
  let mockBackend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
      ],
      providers: [
        HttpGreetingService,
        MockBackend,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  beforeEach(inject([HttpGreetingService], (service: HttpGreetingService) => {
    httpGreetingService = service;
  }));

  beforeEach(inject([MockBackend], (backend: MockBackend) => {
    mockBackend = backend;
  }));

  it('should be', async(() => {
    expect(httpGreetingService).toBeTruthy();
    expect(mockBackend).toBeTruthy();
  }));

  it('should return "hello, mocked!"', async(() => {
    // mock response object to be '{"name": "mocked"}'
    mockBackend.connections.subscribe((connection: MockConnection) =>
      connection.mockRespond(new Response(new ResponseOptions('{"name":"mocked"}')))
    );
    // testing service logic:
    httpGreetingService.sayHiHttp().subscribe(result =>
      expect(result).toBe('hello, mocked!')
    );
  }));
});
