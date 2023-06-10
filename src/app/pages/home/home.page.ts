import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {SqliteService} from "../../services/sqlite.service";
import {SQLite} from "@awesome-cordova-plugins/sqlite/ngx";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router, private sqlite: SqliteService) {}

  ngOnInit() {
    history.pushState(null,'');
  }

  gotoSearch() {
    this.router.navigate(['search'])
  }

  gotoGuestBook() {
    this.sqlite.test();
    this.router.navigate(['guestbook'])
  }
}
