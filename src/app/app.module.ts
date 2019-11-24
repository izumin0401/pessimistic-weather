import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from 'src/app/app.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ErrorModule } from 'src/app/component/page/error/error.module';
import { MainModule } from 'src/app/component/page/main/main.module';
import { ApiService } from 'src/app/service/api.service';
import { HttpService } from 'src/app/service/http.service';
import { RouterService } from 'src/app/service/router.service';
import { UtilService } from 'src/app/service/util.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ErrorModule,
    MainModule,
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
