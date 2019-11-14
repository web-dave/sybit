import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-moin',
  template: `
    <p>moin {{ name }}!</p>
    <button (click)="hi()">^5</button>
  `
})
export class MoinComponent implements OnChanges {
  @Input() name: string;
  @Output() highfive = new EventEmitter<string>();
  hi() {
    this.highfive.emit(`Moin, I'm ${this.name} :)`);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
