import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonService } from './../common.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isSignUp: boolean = true;
  username;

  constructor( public _service: CommonService, public router: Router) {}

  ngOnInit(): void {
  }

  onSubmit() {
    this._service.loginUser(this.username).subscribe(res => {
      if(res.status == 200 && res.message == 'OK') {
        this._service.userId = res.data.userId
        this.isSignUp = false;
      }
    })
  }

  startExam() {
    this.router.navigate(['test'])
  }
  
}
