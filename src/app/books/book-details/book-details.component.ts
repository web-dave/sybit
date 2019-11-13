import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { IBook } from '../ibook';
import { mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'sy-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  book: IBook;
  book$: Observable<IBook>;
  constructor(private route: ActivatedRoute, private service: BookService) {}

  ngOnInit() {
    // this.route.params.subscribe((params: { isbn: string }) => {
    //   this.service.getBook(params.isbn).subscribe(b => (this.book = b));
    // });

    this.book$ = this.route.params.pipe(
      mergeMap((params: { isbn: string }) => this.service.getBook(params.isbn))
    );
  }
}
