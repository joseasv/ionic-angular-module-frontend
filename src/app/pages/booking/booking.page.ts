import { Component, OnInit } from '@angular/core';
import { WorldsacrossService } from 'src/app/worldsacross.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
  standalone: false,
})
export class BookingPage implements OnInit {
  booking: any[] = [];

  constructor(private worldsAcrossService: WorldsacrossService) {}

  ngOnInit(): void {
    this.worldsAcrossService.getBooking().subscribe(
      (data) => (this.booking = data),
      (error) => console.error('Error retirando tutores:', error),
    );
  }
}
