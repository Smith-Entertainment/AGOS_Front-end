import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ObraService } from './obra.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ObraService', () => {
  let service: ObraService;

  beforeEach(() => {
    
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],

    });
    service = TestBed.inject(ObraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
