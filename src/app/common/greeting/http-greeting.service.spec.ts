import {
  TestBed,
  inject,
  async
} from '@angular/core/testing';

import { HttpGreetingService } from './http-greeting.service';
import {
  HttpModule,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('HttpGreetingService', () => {

  let httpGreetingService: HttpGreetingService;

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

  it('should be', async(() => {
    expect(httpGreetingService).toBeTruthy();
  }));
});
