import { Component, OnInit } from '@angular/core';
import { BookService } from './books/book.service';
import { Observable } from 'rxjs';
import { IBook } from './books/ibook';

@Component({
  selector: 'sy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sybit!!!';
  $books: Observable<IBook[]>;
  constructor(private service: BookService) {}

  ngOnInit() {
    this.$books = this.service.getBooks();
  }

  greeting(evt: string) {
    console.log(evt);
  }
}
