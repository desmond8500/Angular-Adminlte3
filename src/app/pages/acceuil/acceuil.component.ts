import { Component, OnInit } from '@angular/core';
import { StructureService } from 'src/app/services/structure.service';
import { Smallbox } from 'src/app/class/template/box/smallbox';
import { AcceuilService } from 'src/app/services/acceuil.service';
import { TestService } from 'src/app/services/test.service';
import { Structure } from 'src/app/class/structure';
import { Agence } from 'src/app/class/agence';
import { Service } from 'src/app/class/service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})


export class AcceuilComponent implements OnInit {
  public structureList: Structure[];
  public agenceList: Agence[];
  public serviceList: Service[];

  constructor(public acceuil: AcceuilService, private test: TestService, private router: Router) { }

  ngOnInit() {
    this.getStructures();
  }

  getStructures() { // récupère la liste des structures
    this.test.getStructures().subscribe( structures => {
      this.structureList = structures;
    });
  }

  getAgences(id) { // récupère la liste des agences
    this.test.getAgences(id).subscribe(agences => {
      this.agenceList = agences;
    });
  }

  getServices(id) { // récupère la liste des agences
    this.test.getServices(id).subscribe(services => {
      this.serviceList = services;
    });
  }

  login() {
    this.router.navigate(['/login']);
  }

}
