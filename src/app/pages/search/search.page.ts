import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

import {SpeechRecognition} from "@capacitor-community/speech-recognition";
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import {Router} from "@angular/router";
import {SqliteService} from "../../services/sqlite.service";
import {searchResult} from "../../services/interfaces.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})



export class SearchPage implements OnInit {

  searchInput : string = "";

  artistData : searchResult[];
  artData : searchResult[];

  artistResults : searchResult[];
  artResults : searchResult[];

  public results : searchResult[];


  constructor(private router: Router, sqlite: SqliteService) {
    SpeechRecognition.requestPermissions()
    this.artistData= sqlite.getArtistSearchData();
    this.artData= sqlite.getArtSearchData();
  }

  ngOnInit() {
  }

  prepare = () => {
    BarcodeScanner.prepare();
  };

  async startScan(){
    BarcodeScanner.hideBackground();
    document.querySelector('body')!.classList.add('scanner-active');
    const result = await BarcodeScanner.startScan();
    if (result.hasContent) {
      this.stopScan();
      this.router.navigate(['itempage',0,result.content])
    }
  };

  stopScan = () => {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body')!.classList.remove('scanner-active');
  };

  search(event){
    const query = event.target.value.toLowerCase();
    this.artistResults = this.artistData.filter((d) => d.name.toLowerCase().includes(query));
    this.artResults = this.artData.filter((d) => d.name.toLowerCase().includes(query));
    this.results = this.artistResults.concat(this.artResults);
    console.log("LOGGING THIS: "+ JSON.stringify(this.results));

  }
  askUser(){
    this.prepare();

    const c = confirm('Do you want to scan a QR Code?');

    if (c) {
      this.startScan();
    } else {
      this.stopScan();
    }
  };

  gotoItemPage(isArtist:number,id:number){
      this.router.navigate(['itempage',isArtist,id])
  }



}
