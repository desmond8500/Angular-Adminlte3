import { Component, OnInit, Input } from '@angular/core';
import { Smallbox } from 'src/app/class/template/box/smallbox';
import { StructureService } from 'src/app/services/structure.service';
import { AgencesService } from 'src/app/services/agences.service';

@Component({
  selector: 'app-agences',
  templateUrl: './agences.component.html',
  styleUrls: ['./agences.component.css']
})
export class AgencesComponent implements OnInit {
  public structures: any;
  public agence: any;

  public list = [1, 2, 3];

  constructor(private structure: StructureService, private ag: AgencesService) { }

  ngOnInit() {
    this.getStructures();
    this.getAgences(1);
  }

  getStructures() {
    this.structure.getStructure().subscribe(data => {
      this.structures = data;
    });
  }

  getAgences(id) {
    this.ag.getAgences(id).subscribe(data => {
      this.agence = data;
      console.log(data);

    });
  }

}
