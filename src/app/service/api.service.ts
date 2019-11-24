import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from 'src/app/interface/weather';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpService: HttpService,
  ) { }

  /**
   * 天気予報情報取得API
   *
   * @return 同期処理
   */
  public getWeather(): Observable<Weather> {
    return this.httpService.get<Weather>(this.getWeatherUrl());
  }

  /**
   * 天気予報情報取得APIのURLを取得する
   *
   * @return 天気予報情報取得APIのURL
   */
  private getWeatherUrl(): string {
    return environment.weather.url +
           'weather?q=London,uk&' +
           'APPID=' + environment.weather.apiKey;
  }

}
