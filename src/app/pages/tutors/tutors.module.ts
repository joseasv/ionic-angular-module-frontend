import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonSearchbar } from '@ionic/angular';

import { TutorsPageRoutingModule } from './tutors-routing.module';

import { TutorsPage } from './tutors.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TutorsPageRoutingModule],
  declarations: [TutorsPage],
  exports: [TutorsPage],
})
export class TutorsPageModule {}
