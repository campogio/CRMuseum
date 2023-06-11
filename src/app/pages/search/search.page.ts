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

  results : searchResult[];


  constructor(private router: Router, sqlite: SqliteService) {
    SpeechRecognition.requestPermissions()
    this.results= sqlite.getSearchData();
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
      console.log(result.content);
      this.stopScan();
    }
  };

  stopScan = () => {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body')!.classList.remove('scanner-active');
  };

  search(event){
    const query = event.target.value.toLowerCase();
    this.results = this.results.filter((d) => d.name.toLowerCase().indexOf(query) > -1);
    console.log("LOGGING THIS: "+ JSON.stringify(this.results));

  }

  askUser(){
    this.prepare();

    const c = confirm('Do you want to scan a barcode?');

    if (c) {
      this.startScan();
    } else {
      this.stopScan();
    }
  };



}
