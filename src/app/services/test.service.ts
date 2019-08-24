import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Structure } from '../class/structure';
import { Agence } from '../class/agence';
import { Service } from '../class/service';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private url = 'http://taabourserver.yonkou.info/api/';

  constructor(private http: HttpClient) { }

  getResume() {
    return this.http.get('./assets/resume.json');
  }

  getStructures(): Observable<Structure[]> { // Récupérer la liste des structures
    return this.http.get<Structure[]>(this.url + 'structuresList');
  }
  getAgences(id): Observable<Agence[]> { // Récupérer la liste des agences
    return this.http.get<Agence[]>(this.url + 'agencesList/' + id);
  }
  getServices(id): Observable<Service[]> { // Récupérer la liste des services
    return this.http.get<Service[]>(this.url + 'servicesList/' + id);
  }

}
