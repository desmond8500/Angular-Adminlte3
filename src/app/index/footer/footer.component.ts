import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public footer = {
    name: 'Taabour',
    lien: 'http://taabour.yonkou.info',
    version: '1.0',
  };
  constructor() { }

  ngOnInit() {
  }

}
