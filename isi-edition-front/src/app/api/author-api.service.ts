import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthorDto, CreateAuthorDto } from "../model/author.dto";
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthorApiService {
  constructor(private http: HttpClient) {}

  get(): Observable<AuthorDto[]> {
    return this.http.get<AuthorDto[]>(`${environment.API_URL}/authors`);
  }

  create(author: CreateAuthorDto): Observable<AuthorDto> {
    return this.http.post<AuthorDto>(`${environment.API_URL}/authors`, author);
  }

  update(author: CreateAuthorDto): Observable<AuthorDto> {
    return this.http.put<AuthorDto>(`${environment.API_URL}/authors`, author);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.API_URL}/authors/${id}`);
  }
}