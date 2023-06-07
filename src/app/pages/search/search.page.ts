import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SpeechRecognition} from "@capacitor-community/speech-recognition";
import any = jasmine.any;

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  recording = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    SpeechRecognition.requestPermissions()
  }

  async startRecognition(){
      const {available} = await SpeechRecognition.available();

      if (available){
        this.recording= true;
        SpeechRecognition.start({
          popup: false,
          partialResults: true,
          language: 'en-US',
        });

        SpeechRecognition.addListener('partialResults',(data: any) =>{
          console.log("Partial Result", data.matches)
          //Works with Android, IOS needs data.matches
          if(data.value && data.value.length > 0){
            //do something with data.value[0]
            this.changeDetectorRef.detectChanges();
          }
        });
      }
  }

  async stopRecognition(){
    this.recording=false;
    await SpeechRecognition.stop();
  }

  ngOnInit() {
  }



}
