import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SpeechRecognition} from "@capacitor-community/speech-recognition";
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})



export class SearchPage implements OnInit {


  constructor(private changeDetectorRef: ChangeDetectorRef) {
    SpeechRecognition.requestPermissions()

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
