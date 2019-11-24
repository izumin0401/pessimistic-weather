import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule, MatSpinner, MatTableModule, MatTabsModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './component/page/error/error.component';
import { MainComponent } from './component/page/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { HttpService } from './service/http.service';
import { RouterService } from './service/router.service';
import { UtilService } from './service/util.service';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    MainComponent,
  ],
  entryComponents: [
    MatSpinner
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatTabsModule,
    OverlayModule,
  ],
  providers: [
    ApiService,
    HttpService,
    RouterService,
    UtilService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
