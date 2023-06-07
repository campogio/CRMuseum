import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}

  ngOnInit() {
    history.pushState(null,'')
  }


  gotoSearch() {
    this.router.navigate(['search'])
  }

  gotoGuestBook() {
    this.router.navigate(['guestbook'])
  }
}
