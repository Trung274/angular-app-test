import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private apiUrl = environment.api.experience;

  constructor(private http: HttpClient) { }

  getExperience(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}