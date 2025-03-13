import { Component, OnInit } from '@angular/core';
import { WorldsacrossService } from 'src/app/worldsacross.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  standalone: false,
})
export class UsersPage implements OnInit {
  users: any[] = [];

  constructor(private worldsAcrossService: WorldsacrossService) {}

  ngOnInit(): void {
    this.worldsAcrossService.getUsers().subscribe(
      (data) => (this.users = data),
      (error) => console.error('Error retirando tutores:', error),
    );
  }
}
