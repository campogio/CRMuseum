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

  media = [
    { image: '/assets/instagram.jpg', alt: 'Image 1' },
    { image: '/assets/instagram.png', alt: 'Image 2' },
    { image: '/assets/instagram.jpg', alt: 'Image 3' }
  ];

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

    alert("1:" + isArtist)
    console.log("2:" + id)

    if (typeof isArtist === "string" && typeof id == "string") {

      const artParsed = isArtist as unknown as number;
      const idParsed = id as unknown as number

      alert("Parsed 1:" + artParsed)
      console.log("Parsed 2:" + idParsed)

      this.sqlite.getFullItem(artParsed, idParsed).then((item) =>{this.itemData=item});
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
