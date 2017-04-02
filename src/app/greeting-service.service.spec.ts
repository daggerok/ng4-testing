import { TestBed, inject } from '@angular/core/testing';

import { GreetingServiceService } from './greeting-service.service';

describe('GreetingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GreetingServiceService]
    });
  });

  it('should ...', inject([GreetingServiceService], (service: GreetingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
