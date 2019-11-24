import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './component/page/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { HttpService } from './service/http.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatTabsModule,
  ],
  providers: [
    ApiService,
    HttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
