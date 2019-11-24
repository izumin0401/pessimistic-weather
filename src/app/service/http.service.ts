import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * getメソッドを呼び出す
   *
   * @param url URL
   * @return 同期処理
   */
  public get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

}
