import { Component, OnInit } from '@angular/core';
import {PhotoService} from "../../services/photo.service";
import {guestEntry, UserPhoto} from "../../services/interfaces.service";
import {SqliteService} from "../../services/sqlite.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.page.html',
  styleUrls: ['./addcomment.page.scss'],
})
export class AddcommentPage implements OnInit {

  text: string;


  pictureToAdd: UserPhoto = {
    filepath: "",
    webviewPath:""
  }

  constructor(private photoService: PhotoService, private sqlite: SqliteService, private router: Router) { }

  ngOnInit() {
  }

  async addPhotoToGallery() {
    await this.photoService.addNewPhoto().then((photo) => {this.pictureToAdd = photo});
  }

  postComment(){
    let newEntry : guestEntry;

    if(this.pictureToAdd.webviewPath != ''){
      newEntry=<guestEntry>{
        id: -1,
        description: this.text,
        hasMedia: true,
        mediaPath: this.pictureToAdd.webviewPath
      }
    }else {
      newEntry={
        id : -1,
        description: this.text,
        hasMedia: false,
        mediaPath: ''
      }
    }

    alert(JSON.stringify(newEntry))

    this.sqlite.newComment(newEntry)
    this.router.navigate(['guestbook'])

  }
}
