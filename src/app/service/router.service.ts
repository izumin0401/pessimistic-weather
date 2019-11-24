import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(
    private router: Router
  ) { }

  /**
   * エラー画面へ遷移する
   */
  public goError(): void {
    this.router.navigate(['/error']);
  }

}
