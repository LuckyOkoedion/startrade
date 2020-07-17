import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {
  pageTitle = "Rules"
  pageImage = "../../../assets/img/laptop-3196481.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
