import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getData<T>(apiUrl: string): Observable<T> {
    // Makes an HTTP GET request to fetch data from the specified API endpoint
    return this.http.get<T>(apiUrl);
  }
}
