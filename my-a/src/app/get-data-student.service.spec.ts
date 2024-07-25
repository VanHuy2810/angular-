import { TestBed } from '@angular/core/testing';

import { GetDataStudentService } from './get-data-student.service';

describe('GetDataStudentService', () => {
  let service: GetDataStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDataStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
