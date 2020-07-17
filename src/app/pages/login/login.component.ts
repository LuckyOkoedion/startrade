import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  pageTitle = "Login Page"
  pageImage = "../../../assets/img/hand-427504.png"
  constructor() { }

  ngOnInit(): void {
  }

}
