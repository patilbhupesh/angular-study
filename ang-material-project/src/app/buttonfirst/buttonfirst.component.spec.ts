import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonfirstComponent } from './buttonfirst.component';

describe('ButtonfirstComponent', () => {
  let component: ButtonfirstComponent;
  let fixture: ComponentFixture<ButtonfirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonfirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
