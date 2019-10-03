import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-setup',
  templateUrl: './tab-setup.component.html',
  styleUrls: ['./tab-setup.component.css']
})
export class TabSetupComponent implements OnInit {
  public tab = {
    titre: 'Carte',
    menu: [
      { titre: 'home', lien: 'vert-tabs-', class: 'active', aria: 'true' },
      { titre: 'profile', lien: 'vert-tabs-', class: '', aria: 'false' },
      { titre: 'messages', lien: 'vert-tabs-', class: '', aria: 'false' },
      { titre: 'settings', lien: 'vert-tabs-', class: '', aria: 'false' },
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
