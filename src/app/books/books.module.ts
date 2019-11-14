import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookListComponent } from './book-list/book-list.component';
import { FormatPipe } from './format.pipe';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookEditComponent } from './book-edit/book-edit.component';

@NgModule({
  declarations: [
    BooksComponent,
    BookListComponent,
    FormatPipe,
    BookDetailsComponent,
    BookEditComponent
  ],
  imports: [CommonModule, BooksRoutingModule, FormsModule],
  exports: [BooksComponent, BookListComponent]
})
export class BooksModule {}
