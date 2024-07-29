import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = environment.api.contact;

  constructor(private http: HttpClient) { }

  getContact(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}