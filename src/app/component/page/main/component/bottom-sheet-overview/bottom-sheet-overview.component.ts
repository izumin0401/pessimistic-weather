import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-sheet-overview',
  template:
    `
      <mat-nav-list>
        <span mat-line class="error">予期せぬエラーが発生しました。</span>
      </mat-nav-list>
    `,
  styles: [
    `
      .error {
        color: red;
      }
    `
  ]
})
export class BottomSheetOverviewComponent {
}
