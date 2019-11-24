import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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

  /**
   * エラーハンドリング
   *
   * NOTE: APIを実行した場合、すべてのエラーは本メソッドでハンドリングされる
   *
   * @param error エラー
   */
  public handleError(error: HttpErrorResponse): void {
    console.log(error);
    alert('予期せぬエラーが発生しました。');
  }

}
