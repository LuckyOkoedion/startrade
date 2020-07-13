import { Component, OnInit, OnDestroy, AfterViewInit, Input } from '@angular/core';
import { smoothRotate, halfSecondFadeIn, oneSecondFadeIn, oneAndHalfSecondFadeIn, twoSecondFadeIn } from 'src/app/animations/startradeanimations';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [smoothRotate, halfSecondFadeIn, oneSecondFadeIn, oneAndHalfSecondFadeIn, twoSecondFadeIn]
})
export class HomeComponent implements OnInit {

  state: string = "no-rotation";
  textState: string = "hidden";
  @Input() mode: MatDrawerMode

  constructor() { }

  changeAnimationState() {
    this.state = (this.state === "no-rotation" ? "rotation" : "no-rotation")
  }

  fadeInText() {
    this.textState = "shown"

  }

  ngOnInit(): void {
  }



}
