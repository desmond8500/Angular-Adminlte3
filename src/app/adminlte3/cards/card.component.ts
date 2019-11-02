import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">{{ card.titre }}</h3>
      </div>
      <div class="card-body">
      sdcsdcsd
        {{ card.content }}
      </div>
    </div>
  `,
  styles: []
})
export class CardComponent implements OnInit {
  @Input() card = {
    content: 'contenu',
    titre: 'title',
  };
  constructor() { }

  ngOnInit() {
  }

}
