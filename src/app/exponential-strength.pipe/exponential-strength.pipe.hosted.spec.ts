import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';

@Component({
  template: '...'
})
class TestHostComponent {
}

describe('exponential-strength.pipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });

  it('should show the exponentiated strength');
});
