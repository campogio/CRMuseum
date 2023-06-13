import { Component, OnInit } from '@angular/core';
import {guestEntry} from "../../services/interfaces.service";
import {Router} from "@angular/router";
import {InfiniteScrollCustomEvent} from "@ionic/angular";
import {SqliteService} from "../../services/sqlite.service";

@Component({
  selector: 'app-guestbook',
  templateUrl: './guestbook.page.html',
  styleUrls: ['./guestbook.page.scss'],
})
export class GuestbookPage implements OnInit {

  entries : guestEntry[] = [];
  allLoaded = false;

  constructor(private router:Router, private sqlite: SqliteService) {

    this.addEntries(0)

  }

  ngOnInit() {

  }

  addEntries(index: number){

    let newEntries: guestEntry[] = [];

    this.sqlite.getEntries(index).then((result)=>{
      newEntries = newEntries.concat(result);

      alert("New Entries: "+ JSON.stringify(newEntries))

      if(result.length < 1){
        this.allLoaded = true;
      }else {
        this.entries= this.entries.concat(newEntries)
      }

    });



  }

  getEntries(event){

    this.addEntries(this.entries.length);

    setTimeout(() => {
      (event as InfiniteScrollCustomEvent).target.complete();
    }, 500);

  }

  gotoAddComment(){
    this.router.navigate(['addcomment'])
  }

}
