import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'sy-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss']
})
export class TitleBoxComponent implements OnInit {
  @Input() myTitle: string;
  @Input() tag: string;
  @Output() myTag = new EventEmitter<string>();
  txt;
  constructor() {}

  ngOnInit() {
    this.txt = `<${this.tag}>${this.myTitle}</${this.tag}>`;
  }

  moin(e: MouseEvent) {
    console.log(e);
    this.myTag.emit('My TAG is: ' + this.tag);
  }
}
