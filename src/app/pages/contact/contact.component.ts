import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  pageTitle = "Contact Page"
  pageImage = "../../../assets/img/man-791049.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
