import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.css']
})
export class AgenceComponent implements OnInit {
  public resumeList;

  constructor(private resume: TestService, public http: HttpClient) { }

  ngOnInit() {
    this.getResume();
  }

  getResume() {
    this.resumeList = this.resume.getResume().subscribe(data => {
      this.resumeList = data;
    });
  }


}
