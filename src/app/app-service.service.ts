import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get(`https://reqres.in/api/users?page=2`);
  }
}
