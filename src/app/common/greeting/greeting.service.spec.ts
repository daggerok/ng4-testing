import { TestBed, inject } from '@angular/core/testing';

import { GreetingService } from './greeting.service';

describe('GreetingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GreetingService]
    });
  });

  it('should be', inject([GreetingService], (service: GreetingService) => {
    expect(service).toBeTruthy();
  }));

  it('should return "hello, buddy!" if no input provided', inject([GreetingService], (service: GreetingService) => {
    expect(service.sayHi()).toBe('hello, buddy!');
  }));

  it('should return "hello, Max!" if input "Max" provided', inject([GreetingService], (service: GreetingService) => {
    expect(service.sayHi('Max')).toBe('hello, Max!');
  }));
});
