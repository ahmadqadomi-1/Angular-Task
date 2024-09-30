import { TestBed } from '@angular/core/testing';

import { ServiceUrlService } from './service-url.service';

describe('ServiceUrlService', () => {
  let service: ServiceUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
