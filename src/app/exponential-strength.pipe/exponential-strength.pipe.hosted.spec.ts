import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';

@Component({
  template: '<span>strength: {{ strength | exponentialStrength : exponent }}</span>'
})
class TestHostComponent {
  strength = 5;
  exponent = 2;
}

describe('exponential-strength.pipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExponentialStrengthPipe,
        TestHostComponent
      ]
    });
  });

  it('should show the exponentiated strength', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    const element = fixture.nativeElement;
    fixture.detectChanges();
    expect(element.textContent).toContain('25');
  });
});
