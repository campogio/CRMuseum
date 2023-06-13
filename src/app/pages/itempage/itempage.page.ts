import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import {SqliteService} from "../../services/sqlite.service";
import {fullItem, media} from "../../services/interfaces.service";

@Component({
  selector: 'app-itempage',
  templateUrl: './itempage.page.html',
  styleUrls: ['./itempage.page.scss'],
})
export class ItempagePage implements OnInit {

  constructor(private router :Router, private route: ActivatedRoute, private sqlite: SqliteService) { }
  loading = true;

  media: media[] = []

  slideOffset = 0;
  slideWidth = 0;
  currentSlide = 0;

  itemData: fullItem = {
    id: 0,
    name: "",
    roomId: 0,
    artistId: -1,
    description: "",
    hasMedia: false
  };

   ngOnInit() {
     this.slideWidth = document.querySelector('.slider-container')?.clientWidth || 0;
     this.loading=true;
    const isArtist = this.route.snapshot.paramMap.get("isArtist");
    const id = this.route.snapshot.paramMap.get("id");


    if (typeof isArtist === "string" && typeof id == "string") {

      const artParsed = isArtist as unknown as number;
      const idParsed = id as unknown as number

      this.sqlite.getFullItem(artParsed, idParsed).then((item) =>{this.itemData=item});
      this.sqlite.getMediaForItem(artParsed,idParsed).then((result) =>{this.media=result})
      this.loading= false;

    } else {
      alert("Error in item parsing")
    }


  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.media.length;
    this.slideOffset = -this.slideWidth * this.currentSlide;
  }


}
