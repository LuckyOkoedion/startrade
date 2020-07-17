import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  pageTitle = "About Page"
  pageImage = "../../../assets/img/startup-594090.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
