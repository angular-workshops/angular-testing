import { Component } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeroComponent } from './hero.component';
import { Hero } from 'app/shared/hero';

@Component({
  selector: 'app-test',
  template: `<app-hero [hero]="hero" (delete)="onDeleteClick($event)"></app-hero>`
})
class TestHostComponent {
  hero: Hero;
  onDeleteClick = jasmine.createSpy('onDelete');
}

describe('HeroComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, HeroComponent]
    });
  });

  it('should work with all the attributes bound', async(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.componentInstance.hero = { id: 121, name: 'Mr Hero', strength: 4, age: 30 };
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('121');
    expect(fixture.nativeElement.textContent).toContain('Mr Hero');

    const button = fixture.debugElement.query(By.css('button'));
    const stopPropagationSpy = jasmine.createSpy('stopPropagation');
    button.triggerEventHandler('click', { stopPropagation: stopPropagationSpy });
    fixture.detectChanges();

    const deleteClickSpy = fixture.componentInstance.onDeleteClick;
    expect(deleteClickSpy).toHaveBeenCalled();

    expect(stopPropagationSpy).toHaveBeenCalled();
  }));

  it('should error if no hero property bound', async(() => {
    TestBed.overrideComponent(TestHostComponent, {
      set: { template: `<app-hero></app-hero>` }
    });
    fixture = TestBed.createComponent(TestHostComponent);
    expect(() => fixture.detectChanges()).toThrowError(`Cannot read property 'id' of undefined`);
  }));
});
