import { HttpClient } from "@angular/common/http";
import { Observable, finalize } from "rxjs";
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ImageTransferService {
  constructor(private http: HttpClient) {}

  transfer(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);
    const upload = this.http.post<string[]>(`${environment.API_URL}/image`, formData, {
      reportProgress: true,
      observe: 'events'
    });

    return upload;
  }
}