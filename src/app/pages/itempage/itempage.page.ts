import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import {SqliteService} from "../../services/sqlite.service";
import {fullItem} from "../../services/interfaces.service";

@Component({
  selector: 'app-itempage',
  templateUrl: './itempage.page.html',
  styleUrls: ['./itempage.page.scss'],
})
export class ItempagePage implements OnInit {

  constructor(private router :Router, private route: ActivatedRoute, private sqlite: SqliteService) { }
  loading = true;
  itemData: fullItem = {
    id: 0,
    name: "",
    roomId: 0,
    description: "",
    hasMedia: false
  };

   ngOnInit() {
     this.loading=true;
    const isArtist = this.route.snapshot.paramMap.get("isArtist");
    const id = this.route.snapshot.paramMap.get("id");

    console.log("1:" + isArtist)
    console.log("2:" + id)

    if (typeof isArtist === "string" && typeof id == "string") {

      const artParsed = isArtist as unknown as boolean;
      const idParsed = id as unknown as number

      console.log("Parsed 1:" + artParsed)
      console.log("Parsed 2:" + idParsed)

      this.sqlite.getFullItem(artParsed, idParsed).then((item) =>{this.itemData=item});
      this.loading= false;

    } else {
      alert("Error in item parsing")
    }


  }

}
