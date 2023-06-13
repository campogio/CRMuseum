import { Component, OnInit } from '@angular/core';
import {PhotoService} from "../../services/photo.service";

@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.page.html',
  styleUrls: ['./addcomment.page.scss'],
})
export class AddcommentPage implements OnInit {

  constructor(public photoService: PhotoService) { }

  ngOnInit() {
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
