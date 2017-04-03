import {
  TestBed,
  inject,
  async,
  fakeAsync,
  tick
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

  it('should return "hello, buddy!" if no input provided using async', async(() => {
    asyncGreetingService.sayHiAsync().then(result => {
      expect(result).toBe('hello, buddy!');
    });
  }));

  it('should return "hello, Max!" if input "Max" provided using fakeAsync', fakeAsync(() => {
    let greeting;

    asyncGreetingService.sayHiAsync('Max').then(result => {
      greeting = result;
    });

    expect(greeting).toBeUndefined();

    tick(500);
    expect(greeting).toBeUndefined();

    tick(500);
    expect(greeting).toBeDefined();
    expect(greeting).toBe('hello, Max!');
  }));
});
