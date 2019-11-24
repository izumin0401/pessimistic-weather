import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PessimisticWeather } from 'src/app/interface/pessimistic-weather';
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
   */
  public getWeather(): Observable<PessimisticWeather> {
    return this.httpService.get<PessimisticWeather>(this.getWeatherUrl());
  }

  /**
   * 天気予報情報取得APIのURLを取得する
   *
   * NOTE: 日本語化するとAPIの速度が遅くなるので使用しない
   *
   * @return 天気予報情報取得APIのURL
   */
  private getWeatherUrl(): string {
    return environment.weather.url +
           'id=1850147' + '&' +
           'units=metric' + '&' +
           'APPID=' + environment.weather.apiKey;
  }

}
