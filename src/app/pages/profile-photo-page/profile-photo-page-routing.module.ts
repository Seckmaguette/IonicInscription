import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePhotoPagePage } from './profile-photo-page.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePhotoPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePhotoPagePageRoutingModule {}
