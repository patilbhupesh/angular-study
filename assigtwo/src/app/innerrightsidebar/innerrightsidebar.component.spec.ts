import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerrightsidebarComponent } from './innerrightsidebar.component';

describe('InnerrightsidebarComponent', () => {
  let component: InnerrightsidebarComponent;
  let fixture: ComponentFixture<InnerrightsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerrightsidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerrightsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
