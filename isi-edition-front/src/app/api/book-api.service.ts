import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookDto, CreateBookDto } from '../model/book.dto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  constructor(private http: HttpClient) {}

  get(): Observable<BookDto[]> {
    return this.http.get<BookDto[]>(`${environment.API_URL}/books`);
  }

  create(book: CreateBookDto): Observable<BookDto> {
    return this.http.post<BookDto>(`${environment.API_URL}/books`, book);
  }

  update(book: CreateBookDto): Observable<BookDto> {
    return this.http.put<BookDto>(`${environment.API_URL}/books`, book);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.API_URL}/books/${id}`);
  }
}
