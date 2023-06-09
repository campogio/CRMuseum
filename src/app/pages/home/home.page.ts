import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {SQLiteService} from "../../services/sqlite.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router,private _sqlite: SQLiteService) {}

  ngOnInit() {
    history.pushState(null,'')
    this.runTest()
  }

  async runTest(): Promise<void> {
    try {
      let result: any = await this._sqlite.echo('Hello World');
      console.log(' from Echo ' + result.value);
    }catch (err) {
      return Promise.reject(err);
    }
  }
  gotoSearch() {
    this.router.navigate(['search'])
  }

  gotoGuestBook() {
    this.router.navigate(['guestbook'])
  }
}
