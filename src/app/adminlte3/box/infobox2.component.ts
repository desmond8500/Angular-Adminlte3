import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-infobox2',
  template: `
    <div class="info-box mb-3 bg-warning">
      <span class="info-box-icon"><i class="fas fa-tag"></i></span>
      <div class="info-box-content">
        <span class="info-box-text">Inventory</span>
        <span class="info-box-number">5,200</span>
      </div>
    </div>
  `,
  styles: []
})
export class Infobox2Component implements OnInit {
  @Input() infobox = {
    icon: 'fas fa-cog',
    text: 'CPU Traffic',
    number: '10 ',
    small: '%'
  };

  constructor() { }

  ngOnInit() {
  }

}
