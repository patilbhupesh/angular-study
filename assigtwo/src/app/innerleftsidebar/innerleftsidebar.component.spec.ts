import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerleftsidebarComponent } from './innerleftsidebar.component';

describe('InnerleftsidebarComponent', () => {
  let component: InnerleftsidebarComponent;
  let fixture: ComponentFixture<InnerleftsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerleftsidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerleftsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
