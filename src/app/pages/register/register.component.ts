import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public tel = new FormControl('');
  public password = new FormControl('');
  public confirm = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  send() {

  }

}
