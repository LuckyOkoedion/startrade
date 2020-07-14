import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupShadowComponent } from './popup-shadow.component';

describe('PopupShadowComponent', () => {
  let component: PopupShadowComponent;
  let fixture: ComponentFixture<PopupShadowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupShadowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
