import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private apiUrl = environment.api.education;

  constructor(private http: HttpClient) { }

  getEducation(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}