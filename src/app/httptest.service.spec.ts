/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttptestService } from './httptest.service';

describe('HttptestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttptestService]
    });
  });

  it('should ...', inject([HttptestService], (service: HttptestService) => {
    expect(service).toBeTruthy();
  }));
});
