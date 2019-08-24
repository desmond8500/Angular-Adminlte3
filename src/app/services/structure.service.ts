import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StructureService {
  private url = 'http://taabourserver.yonkou.info/api/';
  private localurl = 'http://localhost:8000/api/';

  constructor(public http: HttpClient) { }


  getAgences(id) { // Récupération des agences
    // return this.http.get(this.url + 'structures/api/1');
    return this.http.get(this.url + 'agences');

  }
  getStructure() { // Récupération des agences
    return this.http.get(this.url + 'structures');
  }
}
