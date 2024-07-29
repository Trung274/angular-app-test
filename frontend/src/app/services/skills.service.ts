import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private apiUrl = environment.api.skills;

  constructor(private http: HttpClient) { }

  getSkills(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}