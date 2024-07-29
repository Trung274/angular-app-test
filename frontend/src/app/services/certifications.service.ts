import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CertificationsService {
  private apiUrl = environment.api.certifications;

  constructor(private http: HttpClient) { }

  getCertifications(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}