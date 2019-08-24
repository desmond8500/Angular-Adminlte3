import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcceuilService {
  constructor(private http: HttpClient) { }

  getResume() {
    return this.http.get('./assets/json/resume.json');
  }
  getResume2() {
    return this.http.get('http://localhost:8000/api/resumes');
  }
  getTable() {
    return this.http.get('./assets/json/table.json');
  }

}
