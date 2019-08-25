import { Component, OnInit, Input } from '@angular/core';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  @Input() Titre = 'Titre';
  @Input() liens = [
    {
      titre: 'Accueil',
      lien: '/'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
