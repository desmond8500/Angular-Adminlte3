import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public mail = new FormControl('');
  public password = new FormControl('');

  constructor(private router: Router) { }

  ngOnInit() {
  }

  send() {

  }

  register() {
    this.router.navigate(['/register']);
  }

}
