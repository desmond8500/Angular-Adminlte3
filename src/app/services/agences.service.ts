import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgencesService {
  private url = 'http://taabourserver.yonkou.info/api/';
  private localUrl = 'http://localhost:8000/api/';
  private testUrl = 'http://localhost:8000/api/structures';

  constructor(private http: HttpClient) {

  }

  getStructures() { // Récupérer la liste des structures
    return this.http.get(this.url + 'structures');
  }
  getAgences(structureId) { // Récupérer la liste des agences
    return this.http.get(this.localUrl + 'agencesList/' + structureId);
  }
  getServices(structureId) { // Récupérer la liste des services
    return this.http.get(this.localUrl + 'agencesList/' + structureId);
  }

  get() { // Récupérer la liste des structures
    return this.http.get(this.testUrl);
  }
}
