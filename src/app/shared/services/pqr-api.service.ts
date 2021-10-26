import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { ResponseJourney } from '../models/Journey';
import { LoginBodyRequest, ResponseLoginService } from '../models/Login';
import { ResponseGetReportByType } from '../models/Reports';
import {
  BodyRequestByStatus,
  BodyRequestCreatePqr,
  ResponseCreatePqr,
  ResponseGetRequestByCode,
  ResponseRequestByStatus,
} from '../models/RequestPqrs';
import {
  BodyResponseRequest,
  ResponseGetByIdRequest,
  ResponseUpdateRequest,
} from '../models/ResponseRequest';
import { ResponseTypeDocument } from '../models/TypeDocument';
import { ResponseTypeRequest } from '../models/TypeRequest';
import { ResponseServiceUsers } from '../models/Users';

@Injectable({
  providedIn: 'root',
})
export class PqrApiService {
  constructor(private http: HttpClient) {}

  getTypeDocument(): Observable<ResponseTypeDocument> {
    return this.http.get<ResponseTypeDocument>(
      `${environment?.urlApi}/api/documents`
    );
  }

  getTypeRequest(): Observable<ResponseTypeRequest> {
    return this.http.get<ResponseTypeRequest>(
      `${environment?.urlApi}/api/requestype`
    );
  }

  getSubtypeRequest(): Observable<ResponseTypeRequest> {
    return this.http.get<ResponseTypeRequest>(
      `${environment?.urlApi}/api/requessubtype`
    );
  }

  getJourneys(): Observable<ResponseJourney> {
    return this.http.get<ResponseJourney>(
      `${environment?.urlApi}/api/journeys`
    );
  }

  createPqrs(body: BodyRequestCreatePqr): Observable<ResponseCreatePqr> {
    return this.http.post<ResponseCreatePqr>(
      `${environment?.urlApi}/api/request`,
      body
    );
  }

  getPqrByCodes(
    codePqrs: string,
    idSender: string
  ): Observable<ResponseGetRequestByCode> {
    return this.http.get<ResponseGetRequestByCode>(
      `${environment?.urlApi}/api/request/${codePqrs}/${idSender}`
    );
  }

  getRepsonseByIdRequest(
    idRequest: string
  ): Observable<ResponseGetByIdRequest> {
    return this.http.get<ResponseGetByIdRequest>(
      `${environment?.urlApi}/api/response/${idRequest}`
    );
  }

  getRequestByStatus(
    body: BodyRequestByStatus
  ): Observable<ResponseRequestByStatus> {
    return this.http.post<ResponseRequestByStatus>(
      `${environment?.urlApi}/api/request/status`,
      body
    );
  }

  responseRequest(
    body: BodyResponseRequest,
    idRequest
  ): Observable<ResponseUpdateRequest> {
    return this.http.post<ResponseUpdateRequest>(
      `${environment?.urlApi}/api/response/${idRequest}`,
      body
    );
  }

  login(body: LoginBodyRequest): Observable<ResponseLoginService> {
    return this.http.post<ResponseLoginService>(
      `${environment?.urlApi}/api/login`,
      body
    );
  }

  getUsers(): Observable<ResponseServiceUsers> {
    return this.http.get<ResponseServiceUsers>(
      `${environment?.urlApi}/api/users`
    );
  }

  reasignRequest(
    body: { assignedUser: string },
    idRequest: string
  ): Observable<any> {
    return this.http.put(
      `${environment?.urlApi}/api/request/assign/${idRequest}`,
      body
    );
  }

  getReportByType(): Observable<ResponseGetReportByType> {
    return this.http.get<ResponseGetReportByType>(`${environment?.urlApi}/api/report/type`);
  }
}
