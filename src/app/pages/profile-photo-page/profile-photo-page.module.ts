import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePhotoPagePageRoutingModule } from './profile-photo-page-routing.module';

import { ProfilePhotoPagePage } from './profile-photo-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePhotoPagePageRoutingModule
  ],
  declarations: [ProfilePhotoPagePage]
})
export class ProfilePhotoPagePageModule {}
