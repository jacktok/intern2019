import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyPageComponent } from './notify-page.component';

describe('NotifyPageComponent', () => {
  let component: NotifyPageComponent;
  let fixture: ComponentFixture<NotifyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
