import { Component, OnInit, Input, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';
import { smoothRotate, halfSecondFadeIn, oneSecondFadeIn, oneAndHalfSecondFadeIn, twoSecondFadeIn } from 'src/app/animations/startradeanimations';
import { Router, NavigationEnd, RouterEvent, ActivatedRoute, NavigationStart } from '@angular/router';

import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [smoothRotate, halfSecondFadeIn, oneSecondFadeIn, oneAndHalfSecondFadeIn, twoSecondFadeIn]
})
export class AppComponent implements OnInit, OnDestroy {

  iconType = true;
  state: string = "no-rotation";
  textState: string = "hidden";
  popupShadowClass: string = "home-popup-shadow" // or about-popup-shadow
  lowerLeftMessageClass: string = "homeLowerLeftMessage"; // homeLowerLeftMessage or aboutLowerLeftMessage
  footerClass: string = "homeFooter"; // homeFooter or aboutFooter
  routerEventSubscription: Subscription;
  currentRoute!: string;

  constructor(private readonly router: Router) {
    this.routerEventSubscription = this.router.events.subscribe((activeUrl: RouterEvent) => {
      if (activeUrl instanceof NavigationStart) {
        this.currentRoute = activeUrl.url
        this.setPageSpecificClass()
      }

    })


  }

  ngOnInit() {


  }

  ngOnDestroy() {
    this.routerEventSubscription.unsubscribe();

  }

  setPageSpecificClass() {
    if (this.currentRoute === "/about") {
      this.footerClass = "aboutFooter";
      this.lowerLeftMessageClass = "aboutLowerLeftMessage";
      this.popupShadowClass = "about-popup-shadow"
    }

    if (this.currentRoute != "/about") {
      this.footerClass = "homeFooter"
      this.lowerLeftMessageClass = "homeLowerLeftMessage"
      this.popupShadowClass = "home-popup-shadow"
    }
  }

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
