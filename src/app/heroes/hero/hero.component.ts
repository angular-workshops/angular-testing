import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from 'app/shared/hero';

@Component({
  selector: 'app-hero',
  template: `
    <span class="badge">{{hero.id}}</span>
    <span>{{hero.name}}</span>
    <button class="delete" (click)="onDeleteClick($event)">x</button>`,
  styleUrls:  ['./hero.component.css']
})
export class HeroComponent {
  @Input() hero: Hero;
  @Output() delete = new EventEmitter();

  onDeleteClick($event): void {
    $event.stopPropagation();
    this.delete.next();
  }
}
