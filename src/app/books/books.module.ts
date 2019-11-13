import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookListComponent } from './book-list/book-list.component';
import { FormatPipe } from './format.pipe';
import { BookDetailsComponent } from './book-details/book-details.component';


@NgModule({
  declarations: [BooksComponent, BookListComponent, FormatPipe, BookDetailsComponent],
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  exports: [BooksComponent, BookListComponent]
})
export class BooksModule { }
