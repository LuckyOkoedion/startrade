import { Component, OnInit, OnDestroy, AfterViewInit, Input } from '@angular/core';
import { smoothRotate, halfSecondFadeIn, oneSecondFadeIn, oneAndHalfSecondFadeIn, twoSecondFadeIn } from 'src/app/animations/startradeanimations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [smoothRotate, halfSecondFadeIn, oneSecondFadeIn, oneAndHalfSecondFadeIn, twoSecondFadeIn]
})
export class HomeComponent implements OnInit, AfterViewInit {

  state: string = "no-rotation";
  textState: string = "hidden";

  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.fadeInText()
    }, 1000);

    setTimeout(() => {
      this.changeAnimationState();
    }, 2500);

  }

  changeAnimationState() {
    this.state = (this.state === "no-rotation" ? "rotation" : "no-rotation")
  }

  fadeInText() {
    this.textState = "shown"

  }

  ngOnInit(): void {


  }



}
