import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-smallbox',
  template: `
    <div class="small-box {{smallbox.color}}">
      <div class="inner">
        <h3>{{ smallbox.number }} </h3>

        <p> {{ smallbox.titre }} </p>
      </div>
      <div class="icon">
        <i class="ion {{ smallbox.icon }}"></i>
      </div>
      <a routerLink="{{ smallbox.lien }}" class="small-box-footer">
        {{ smallbox.linkname }} <i class="fas fa-arrow-circle-right"></i>
      </a>
    </div>
  `,
  styles: []
})
export class SmallboxComponent implements OnInit {
  @Input() smallbox = {
      titre: 'Titre',
      number: 12,
      lien: '#',
      icon: 'ion-bag',
      linkname: 'Consulter',
      color: 'bg-primary'
    };

  constructor() { }

  ngOnInit() {
  }

}
