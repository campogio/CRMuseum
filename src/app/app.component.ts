import { Component } from '@angular/core';
import {SQLiteService} from "./services/sqlite.service";
import {Platform} from "@ionic/angular";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    //private splashScreen: SplashScreen,
    //private statusBar: StatusBar,
    private _sqlite: SQLiteService,
    //private _detail: DetailService,
  ) {

    this.initializeApp();
  }

  async initializeApp() {
    this.platform.ready().then(async () => {
      this._sqlite.initializePlugin().then(ret => {
      });
    });
  }


}
