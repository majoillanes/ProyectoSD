import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSDComponent } from './logo-sd.component';

describe('LogoSDComponent', () => {
  let component: LogoSDComponent;
  let fixture: ComponentFixture<LogoSDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoSDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoSDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
