import {
  TestBed,
  inject,
  async
} from '@angular/core/testing';

import { NameService } from './name.service';

describe('NameService', () => {

  let nameService: NameService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NameService]
    });
  });

  beforeEach(inject([NameService], (service: NameService) => {
    nameService = service;
  }));

  it('should be', async(() => {
    expect(nameService).toBeTruthy();
  }));
});
