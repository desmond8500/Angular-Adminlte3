import { Component, OnInit, Input } from '@angular/core';
import { Smallbox } from 'src/app/class/box/smallbox';

@Component({
  selector: 'app-smallbox',
  templateUrl: './smallbox.component.html',
  styleUrls: ['./smallbox.component.css']
})
export class SmallboxComponent implements OnInit {
  @Input() smallbox: Smallbox =
    {
      titre: 'Titre',
      number: 12,
      lien: '#',
      icon: 'ion-bag',
      linkname: 'Consulter',
      color: 'bg-primary'
    } ;

  constructor() { }

  ngOnInit() {
    console.log(this.smallbox);

  }

}
