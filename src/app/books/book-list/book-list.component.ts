import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { BookService } from '../book.service';
import { IBook } from '../ibook';
import { Subscription, Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'sy-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  $books: Observable<IBook[]>;
  foo = 'hans';

  @Input() books: IBook[];
  constructor(private service: BookService) {}

  format(value: string): string {
    console.log('method', value);
    return value.toUpperCase();
  }

  ngOnInit() {
    this.$books = this.service.getBooks();
  }
}
