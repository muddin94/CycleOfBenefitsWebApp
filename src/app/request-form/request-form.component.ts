import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent {

  submitRequestForm = new FormGroup({
    nameOfOrg: new FormControl('',Validators.required),
    requestStartDate: new FormControl('',Validators.required),
    expense: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    nameOfRequester: new FormControl('',Validators.required),
    phoneNumber: new FormControl('',Validators.required),
    department: new FormControl('',Validators.required),
    description: new FormControl('',[Validators.required,Validators.minLength(20)])
  });

  get nameOfOrg() {
    return this.submitRequestForm.get('nameOfOrg');
  }

  departments=[
      'Religious',
      'Community Outreach',
      'Parks And Recreation'
      ];

  

}
