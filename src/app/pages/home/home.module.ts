import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { TutorsPageModule } from '../tutors/tutors.module';
import { UsersPageModule } from '../users/users.module';
import { BookingPageModule } from '../booking/booking.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    TutorsPageModule,
    UsersPageModule,
    BookingPageModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
