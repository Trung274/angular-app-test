import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private apiUrl = environment.api.about;

  constructor(private http: HttpClient) { }

  getAbout(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}