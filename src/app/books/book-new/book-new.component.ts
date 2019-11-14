import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IBook } from '../ibook';

@Component({
  selector: 'sy-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit {
  form: FormGroup;
  book$: Observable<IBook>;

  constructor(
    private builder: FormBuilder,
    private route: ActivatedRoute,
    private service: BookService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.builder.group({
      title: ['', [Validators.required]],
      subtitle: ['', []],
      isbn: ['', [Validators.required]],
      abstract: ['', []],
      numPages: [0, []],
      author: ['', []],
      cover: ['', []],
      publisher: this.builder.group({
        name: ['', []],
        url: ['', []]
      })
    });
  }

  addControl() {
    this.form.addControl('foo', new FormControl('FOO'));
    this.form.get('foo').setValue('BAR');
  }

  save(b: IBook) {
    this.book$ = this.service
      .postBook(b)
      .pipe(
        tap(book => this.router.navigate(['..'], { relativeTo: this.route }))
      );
  }
}
