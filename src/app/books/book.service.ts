import { Injectable } from '@angular/core';
import { IBook } from './ibook';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = environment.url;

  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.url);
  }
  getBook(isbn: string): Observable<IBook> {
    return this.http.get<IBook>(`${this.url}/${isbn}`);
  }
  putBook(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(`${this.url}/${book.isbn}`, book);
  }
  postBook(book: IBook): Observable<IBook> {
    return this.http.post<IBook>(`${this.url}`, book);
  }
}
