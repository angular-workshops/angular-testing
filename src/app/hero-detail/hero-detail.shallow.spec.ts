import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, fakeAsync, tick, async, ComponentFixture } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgModel, FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of as observableOf } from 'rxjs/observable/of';
import { HeroService } from 'app/shared/hero.service';
import { HeroDetailComponent } from './hero-detail.component';

describe('HeroDetailComponent (shallow tests)', () => {
  let fixture: ComponentFixture<HeroDetailComponent>;
  let component: HeroDetailComponent;
  let element,  mockHeroService, mockActiveRoute, mockLocation;
  const heroes = [
    {id: 3, name: 'Magneta', strength: 4},
    {id: 4, name: 'Dynama', strength: 2}
  ];

  beforeEach(async(() => {
    mockActiveRoute = {params: observableOf([{id: '3'}]) };
    mockLocation = { back: () => {} };
    mockHeroService = { getHero: () => { return Promise.resolve(heroes[0]); }, update: () => {} };

    TestBed.configureTestingModule({
      declarations: [
        HeroDetailComponent
      ],
      providers: [
        // useValue creates a clone of our service object
        { provide: Location, useFactory: () => mockLocation },
        { provide: HeroService, useFactory: () => mockHeroService },
        { provide: ActivatedRoute, useFactory: () => mockActiveRoute }
      ],
      schemas: [
        NO_ERRORS_SCHEMA // hide that angular doesn't know about ngModel
      ],
      imports: [
        FormsModule
      ]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  describe('initialization', () => {
    it('should show the correct hero name & id (using async and detectChanges)', async(() => {
      // first detectChanges triggers the getHero() call
      fixture.detectChanges();
      // we must use whenStable because getHero returns a promise
      fixture.whenStable().then(() => {
        // second detect changes triggers updates to the DOM
        fixture.detectChanges();
        expect(element.querySelector('div').textContent).toContain('id: 3');
        expect(element.querySelector('div').textContent).toContain('Magneta');
      });
    }));

    it('should show the correct hero name & id (using async and autoDetectChanges)', async(() => {
      fixture.autoDetectChanges();
      fixture.whenStable().then(() => {
        expect(element.querySelector('div').textContent).toContain('id: 3');
        expect(element.querySelector('div').textContent).toContain('Magneta');
      });
    }));

    it('should show the correct hero name & id (using fakeAsync and tick)', fakeAsync(() => {
      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      expect(element.querySelector('div').textContent).toContain('id: 3');
      expect(element.querySelector('div').textContent).toContain('Magneta');
    }));
  });

  describe('name input changing', () => {
    beforeEach(fakeAsync(() => {
      fixture.detectChanges();
      tick();
      fixture.detectChanges();
    }));


    it(`should change the hero's name (via nativeElement API)`, () => {
      const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;

      inputElement.value = 'Mr. Nice';
      inputElement.dispatchEvent(createEvent('input')); // this must be called so that detectChanges will know that something has changed
      fixture.detectChanges();

      expect(getHeadingText(fixture)).toContain('Mr. Nice');
    });


    it(`should change the hero's name (via debugElement API)`, () => {
      const ngModel = fixture.debugElement.query(By.directive(NgModel));

      ngModel.triggerEventHandler('ngModelChange', 'Mr. Nice');
      fixture.detectChanges();

      expect(getHeadingText(fixture)).toContain('Mr. Nice');
    });
  });

   describe('clicking save', () => {
     it(`should update the hero service`);
     it(`should navigate back`);
   });
});

function createEvent(eventName: string, bubbles = false, cancelable = false) {
  const evt = document.createEvent('CustomEvent');  // MUST be 'CustomEvent'
  evt.initCustomEvent(eventName, bubbles, cancelable, null);
  return evt;
}

function getHeadingText(fixture) {
  return fixture.debugElement.query(By.css('h2')).nativeElement.textContent;
}
