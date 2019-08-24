import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fulltable',
  templateUrl: './fulltable.component.html',
  styleUrls: ['./fulltable.component.css']
})
export class FulltableComponent implements OnInit {
  @Input() titre = 'Titre du tableau';
  @Input() entete = ['#', 'Tache', 'Progression', 'label'];
  @Input() table;


  constructor() { }

  ngOnInit() {
  }

}
