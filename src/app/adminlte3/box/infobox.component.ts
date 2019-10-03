import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-infobox',
  template: `
    <div class="info-box">
    <span class="info-box-icon bg-info elevation-1"><i class="{{ infobox.icon }}"></i></span>

    <div class="info-box-content">
      <span class="info-box-text">{{ infobox.text }}</span>
      <span class="info-box-number">
        {{ infobox.number }} <small>{{ infobox.small }}</small>
      </span>
    </div>
  </div>
  `,
  styles: []
})
export class InfoboxComponent implements OnInit {
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
