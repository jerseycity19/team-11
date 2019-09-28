import { TestBed } from '@angular/core/testing';

import { UserResponseService } from './user-response.service';

describe('UserResponseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserResponseService = TestBed.get(UserResponseService);
    expect(service).toBeTruthy();
  });
});
