import { Component, OnInit } from '@angular/core';
import { WorldsacrossService } from 'src/app/worldsacross.service';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.page.html',
  styleUrls: ['./tutors.page.scss'],
  standalone: false,
})
export class TutorsPage implements OnInit {
  tutors: any[] = [];
  allTutors: any[] = [];
  specialities: any[] = [];

  constructor(private worldsAcrossService: WorldsacrossService) {}

  ngOnInit(): void {
    this.worldsAcrossService.getTutors().subscribe(
      (data) => {
        this.tutors = data;
        this.allTutors = data;
        const allSpecialities = data.map((tutor) => tutor.speciality);
        this.specialities = [...new Set(allSpecialities), 'All specialities'];
      },
      (error) => console.error('Error retirando tutores:', error),
    );
  }

  handleInput(event: Event): void {
    const target = event.target as HTMLIonSearchbarElement;
    const query = target.value?.toLowerCase() || '';
    this.tutors = this.allTutors.filter((tutor) =>
      tutor.speciality.toLowerCase().includes(query),
    );
  }
}
