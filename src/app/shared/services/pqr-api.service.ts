import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { ResponseJourney } from '../models/Journey';
import { BodyRequestCreatePqr, ResponseCreatePqr, ResponseGetRequestByCode } from '../models/RequestPqrs';
import { ResponseTypeDocument } from '../models/TypeDocument';
import { ResponseTypeRequest } from '../models/TypeRequest';

@Injectable({
  providedIn: 'root'
})
export class PqrApiService {

  constructor(private http: HttpClient) { }

  getTypeDocument(): Observable<ResponseTypeDocument> {
    return this.http.get<ResponseTypeDocument>(`${environment?.urlApi}/api/documents`);
  }

  getTypeRequest(): Observable<ResponseTypeRequest> {
    return this.http.get<ResponseTypeRequest>(`${environment?.urlApi}/api/requestype`);
  }

  getSubtypeRequest(): Observable<ResponseTypeRequest> {
    return this.http.get<ResponseTypeRequest>(`${environment?.urlApi}/api/requessubtype`);
  }

  getJourneys(): Observable<ResponseJourney> {
    return this.http.get<ResponseJourney>(`${environment?.urlApi}/api/journeys`);
  }

  createPqrs(body: BodyRequestCreatePqr): Observable<ResponseCreatePqr> {
    return this.http.post<ResponseCreatePqr>(`${environment?.urlApi}/api/request`, body);
  }

  getPqrByCodes(codePqrs: string, idSender: string): Observable<ResponseGetRequestByCode> {
    return this.http.get<ResponseGetRequestByCode>(`${environment?.urlApi}/api/request/${codePqrs}/${idSender}`);
  }



}
