import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {
  private apiUrl = `${environment.api.server}api/personal-info`;

  constructor(private http: HttpClient) { }

  getPersonalInfo(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      map((response: any) => {
        if (Array.isArray(response) && response.length > 0) {
          const info = response[0];
          info.favorite_colors = info.favorite_colors.map((fc: any) => fc.color);
          info.personality_traits = info.personality_traits.map((pt: any) => pt.trait);
          return info;
        }
        return null;
      })
    );
  }
}