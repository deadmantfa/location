import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private static formatErrors(error: any): any {
    return throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${path}`, { params })
      .pipe(catchError(ApiService.formatErrors));
  }

  status = (response: any) => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }

  json = (response: any) => {
    return response.json();
  }

  // getFetch(path: string): Promise<any> {
  //   return fetch(`${path}`).then(this.status).then(this.json);
  // }

  // postFetch(path: string, body: object = {}): Promise<any> {
  //   return fetch(`${path}`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(body),
  //   }).then(this.status).then(this.json);
  // }

  put(path: string, body: object = {}): Observable<any> {
    return this.http.put(
      `${path}`,
      JSON.stringify(body)
    ).pipe(catchError(ApiService.formatErrors));
  }

  post(path: string, body: object = {}, stringify = true): Observable<any> {
    return this.http.post(
      `${path}`,
      stringify ? JSON.stringify(body) : body
    ).pipe(catchError(ApiService.formatErrors));
  }

  delete(path: string): Observable<any> {
    return this.http.delete(
      `${path}`
    ).pipe(catchError(ApiService.formatErrors));
  }

  getFaq(path: string): Observable<any> {
    return this.get(path);
  }

  getFaqSearch(path: string): Observable<any> {
    return this.get(path);
  }

  getBlogs(path: string): Observable<any> {
    return this.get(path);
  }

  getPricing(path: string, body: object): Observable<any> {
    return this.post(path, body, false);
  }

  getLocation(path: string): Observable<any> {
    return this.get(path);
  }

  getHomeData(path: string): Observable<any> {
    return this.get(path);
  }

  getCurrentUserCity(path: string): Observable<any> {
    return this.get(path);
  }

  getAboutData(path: string): Observable<any> {
    return this.get(path);
  }

  getCoachedData(path: string): Observable<any> {
    return this.get(path);
  }
}
