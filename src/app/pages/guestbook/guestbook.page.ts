import { Component, OnInit } from '@angular/core';
import {guestEntry} from "../../services/interfaces.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-guestbook',
  templateUrl: './guestbook.page.html',
  styleUrls: ['./guestbook.page.scss'],
})
export class GuestbookPage implements OnInit {

  entries : guestEntry[];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  gotoAddComment(){
    this.router.navigate(['addcomment'])
  }

}
