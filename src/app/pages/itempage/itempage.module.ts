import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItempagePageRoutingModule } from './itempage-routing.module';

import { ItempagePage } from './itempage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItempagePageRoutingModule
  ],
  declarations: [ItempagePage]
})
export class ItempagePageModule {}
