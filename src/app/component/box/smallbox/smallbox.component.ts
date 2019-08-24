import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-smallbox',
  templateUrl: './smallbox.component.html',
  styleUrls: ['./smallbox.component.css']
})
export class SmallboxComponent implements OnInit {
  @Input() smallbox;

  constructor() { }

  ngOnInit() {
  }

}
