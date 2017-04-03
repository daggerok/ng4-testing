import {
  TestBed,
  inject,
  async
} from '@angular/core/testing';

import { AsyncGreetingService } from './async-greeting.service';

describe('AsyncGreetingService', () => {

  let asyncGreetingService: AsyncGreetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsyncGreetingService]
    });
  });

  beforeEach(inject([AsyncGreetingService], (service: AsyncGreetingService) => {
    asyncGreetingService = service;
  }));

  // xit('should be', () => { // this test will skipped
  // fit('should be', () => { // only this test will run
  it('should be', () => {
    expect(asyncGreetingService).toBeTruthy();
  });

  it('should return "hello, buddy" if no input provided', async(() => {
    asyncGreetingService.sayHiAsync().then(result => {
      expect(result).toBe('hello, buddy!');
    });
  }));
});
