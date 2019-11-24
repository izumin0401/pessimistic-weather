import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Weather } from 'src/app/interface/weather';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.styl']
})
export class MainComponent implements OnInit {

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.init();
  }

  /**
   * 初期処理
   */
  public async init() {
    await this.getWeather();
  }

  /**
   * 天気予報を取得する
   *
   * @return 同期処理
   */
  private getWeather(): Promise<Weather | HttpErrorResponse> {
    return new Promise((resolve, reject) => {
      this.apiService.getWeather()
      .subscribe(
        (response: Weather) => {
          resolve(response.weather[0].main);
        },
        (error: HttpErrorResponse) => {
          reject(error);
        }
      );
    });
  }

}
