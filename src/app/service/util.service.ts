import { Injectable } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { MatSpinner } from '@angular/material/progress-spinner';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  public spinner: OverlayRef;

  constructor(
    private overlay: Overlay,
  ) { }

  /**
   * スピナーを開始する
   */
  public attachSpinner(): void {
    this.spinner =  this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay
        .position().global().centerHorizontally().centerVertically()
    });

    this.spinner.attach(new ComponentPortal(MatSpinner));
  }

  /**
   * スピナーを解除する
   */
  public detachSpinner(): void {
    this.spinner.detach();
  }

}
