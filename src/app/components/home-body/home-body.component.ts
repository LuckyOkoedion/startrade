import { Component, OnInit, OnDestroy, AfterViewInit, Input } from '@angular/core';
import { smoothRotate, halfSecondFadeIn, oneSecondFadeIn, oneAndHalfSecondFadeIn, twoSecondFadeIn } from 'src/app/animations/startradeanimations';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.scss'],
  animations: [smoothRotate, halfSecondFadeIn, oneSecondFadeIn, oneAndHalfSecondFadeIn, twoSecondFadeIn]
})
export class HomeBodyComponent implements OnInit, OnDestroy, AfterViewInit {

  state: string = "no-rotation";
  textState: string = "hidden";
  constructor() {
  }

  ngOnInit() {

  }



  ngAfterViewInit() {
    // this.changeAnimationState()
    // this.fadeInText()



  }



  changeAnimationState() {
    this.state = (this.state === "no-rotation" ? "rotation" : "no-rotation")
  }

  fadeInText() {
    this.textState = "shown"

  }

  ngOnDestroy() {


  }

}
