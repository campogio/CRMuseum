import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-itempage',
  templateUrl: './itempage.page.html',
  styleUrls: ['./itempage.page.scss'],
})
export class ItempagePage implements OnInit {
  id: string = 'test';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      console.log(params);
      this.id = params['id']
    })
  }

}
