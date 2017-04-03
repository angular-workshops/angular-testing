import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from 'app/shared/hero';
import { AgeService } from 'app/shared/age.service';

@Component({
  selector: 'app-hero',
  template: `
    <span class="badge">{{hero.id}}</span>
    <span>{{hero.name}} <em>({{ age.describe(hero.age) }})</em></span>
    <button class="delete" (click)="onDeleteClick($event)">x</button>`,
  styleUrls:  ['./hero.component.css'],
  providers: [
    AgeService
  ]
})
export class HeroComponent {
  @Input() hero: Hero;
  @Output() delete = new EventEmitter();

  constructor(public age: AgeService) {}

  onDeleteClick($event): void {
    $event.stopPropagation();
    this.delete.next();
  }
}
