import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../ibook';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'sy-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  book$: Observable<IBook>;
  constructor(
    private route: ActivatedRoute,
    private service: BookService,
    private router: Router
  ) {}

  ngOnInit() {
    this.book$ = this.route.params.pipe(
      mergeMap((params: { isbn: string }) => this.service.getBook(params.isbn))
    );
  }

  save(b: IBook) {
    this.book$ = this.service
      .putBook(b)
      .pipe(
        tap(book => this.router.navigate(['..'], { relativeTo: this.route }))
      );
  }
}
