import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  departments=[
      'Religious',
      'Community Outreach',
      'Parks And Recreation'
      ];

  constructor() { }

  ngOnInit() {
  }

}
