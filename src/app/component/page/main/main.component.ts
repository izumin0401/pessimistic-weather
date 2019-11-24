import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { PessimisticWeather } from 'src/app/interface/pessimistic-weather';
import { ApiService } from 'src/app/service/api.service';
import { HttpService } from 'src/app/service/http.service';
import { UtilService } from 'src/app/service/util.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.styl']
})
export class MainComponent implements OnInit {

  public displayedColumns = ['time', 'temp', 'clouds', 'icon'];
  public dataSource: Array<{}> = [];

  constructor(
    private apiService: ApiService,
    private httpService: HttpService,
    private utilService: UtilService,
  ) { }

  ngOnInit() {
    this.init();
  }

  /**
   * 初期処理
   */
  public async init() {
    try {
      await this.attachSpinner();
      await this.getWeather();
    } catch (error) {
      this.httpService.handleError(error);
    } finally {
      await this.detach();
    }
  }

  /**
   * スピナー開始
   */
  private attachSpinner() {
    return new Promise((resolve) => {
      this.utilService.attachSpinner();
      resolve();
    });
  }

  /**
   * 天気予報を取得する
   */
  private getWeather(): Promise<PessimisticWeather | HttpErrorResponse> {
    return new Promise((resolve, reject) => {
      this.apiService.getWeather().subscribe(
        (response: PessimisticWeather) => {
          this.dataSource = this.fetchDataSource(response.list);
          resolve();
        },
        (error: HttpErrorResponse) => {
          reject(error);
        }
      );
    });
  }

  /**
   * 画面表示用にデータを成形・取得する
   * ※MatTableに合わせた形とする
   *
   * @param list 天気予報リスト
   * @return 画面表示用に成形されたデータ
   */
  private fetchDataSource(list: []): Array<{}> {
    const dataSource = [];

    for (const key of Object.keys(list)) {
      const obj = {};
      obj['time']   = list[key].dt_txt;
      obj['temp']   = list[key].main.temp;
      obj['clouds'] = list[key].clouds.all;
      obj['icon']   = list[key].weather[0].icon;

      dataSource.push(obj);
    }

    return dataSource;
  }

  /**
   * スピナー解除
   */
  private detach() {
    return new Promise((resolve) => {
      this.utilService.detachSpinner();
      resolve();
    });
  }

}
