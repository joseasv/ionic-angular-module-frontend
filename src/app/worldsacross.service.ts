import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorldsacrossService {
  private baseURL = 'https://test.worldsacross.com/api'

  constructor(private http: HttpClient) {

  }

  getTutors(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}/tutors`)
  }
}
