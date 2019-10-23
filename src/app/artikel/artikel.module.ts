import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ArtikelPage } from './artikel.page';

const routes: Routes = [
  

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ArtikelPage
      }
    ];
  ],
  declarations: [ArtikelPage]
})
export class ArtikelPageModule {}
