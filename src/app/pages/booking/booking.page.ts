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
  allBooking: any[] = [];
  users: any[] = [];

  constructor(private worldsAcrossService: WorldsacrossService) {}

  ngOnInit(): void {
    this.worldsAcrossService.getBooking().subscribe(
      (data) => {
        this.booking = data;
        this.allBooking = data;
        const allBookingUsers = data.map((book) => book.user);
        this.users = [
          ...new Set(allBookingUsers),
          { id: -1, first_name: 'Todos los usuarios' },
        ];
      },
      (error) => console.error('Error retirando reservas:', error),
    );
  }

  onContextChange(ctxt: any): void {
    console.log(ctxt);
    const selectedUserId = Number(ctxt.detail.value);
    if (selectedUserId === -1) {
      this.booking = this.allBooking;
    } else {
      this.booking = this.allBooking.filter(
        (book) => book.user.id === selectedUserId,
      );
    }
  }
}
