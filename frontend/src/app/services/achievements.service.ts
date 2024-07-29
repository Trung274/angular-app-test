import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AchievementsService {
  private apiUrl = environment.api.achievements;

  constructor(private http: HttpClient) { }

  getAchievements(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}