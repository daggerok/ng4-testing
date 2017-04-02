import { TestBed, inject } from '@angular/core/testing';

import { GreetingServiceService } from './greeting-service.service';

describe('GreetingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GreetingServiceService]
    });
  });

  it('should be', inject([GreetingServiceService], (service: GreetingServiceService) => {
    expect(service).toBeTruthy();
  }));

  it('should return "hello, buddy" if no input provided', inject([GreetingServiceService], (service: GreetingServiceService) => {
    expect(service.sayHi()).toBe('hello, buddy!');
  }));
});
