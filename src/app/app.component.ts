import { Component, OnInit, OnDestroy, AfterViewInit, Input } from '@angular/core';
import { smoothRotate, halfSecondFadeIn, oneSecondFadeIn, oneAndHalfSecondFadeIn, twoSecondFadeIn } from 'src/app/animations/startradeanimations';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [smoothRotate, halfSecondFadeIn, oneSecondFadeIn, oneAndHalfSecondFadeIn, twoSecondFadeIn]
})
export class AppComponent {
  iconType = true;
  state: string = "no-rotation";
  textState: string = "hidden";
  @Input() mode: MatDrawerMode

  toggleIcon() {
    this.iconType = !this.iconType;
  }

  changeAnimationState() {
    this.state = (this.state === "no-rotation" ? "rotation" : "no-rotation")
  }

  fadeInText() {
    this.textState = "shown"

  }
}
