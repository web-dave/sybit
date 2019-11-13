import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sy-mouse-cursor',
  templateUrl: './mouse-cursor.component.html',
  styleUrls: ['./mouse-cursor.component.scss']
})
export class MouseCursorComponent implements OnInit {
  x = 0;
  y = 0;
  constructor() {}
  mausmaus(e: MouseEvent) {
    // tslint:disable:no-string-literal
    this.x = e.clientX - e.target['offsetLeft'];
    this.y = e.clientY - e.target['offsetTop'];
  }
  ngOnInit() {}
}
