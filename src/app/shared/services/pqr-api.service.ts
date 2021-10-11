import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { ResponseTypeDocument } from '../models/TypeDocument';

@Injectable({
  providedIn: 'root'
})
export class PqrApiService {

  constructor(private http: HttpClient) { }

  getTypeDocument(): Observable<ResponseTypeDocument> {
    return this.http.get<ResponseTypeDocument>(`${environment?.urlApi}/api/documents`);
  }
}
