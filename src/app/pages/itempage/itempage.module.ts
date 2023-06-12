import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { IonicModule } from '@ionic/angular';

import { ItempagePageRoutingModule } from './itempage-routing.module';

import { ItempagePage } from './itempage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItempagePageRoutingModule,
    SlickCarouselModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ItempagePage]
})
export class ItempagePageModule {}
