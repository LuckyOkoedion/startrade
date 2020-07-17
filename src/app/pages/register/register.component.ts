import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  pageTitle = "Register Page"
  pageImage = "../../../assets/img/thumbs-up-2649310.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
