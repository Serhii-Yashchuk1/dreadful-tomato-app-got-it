import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLinkComponent } from './home-link.component';

describe('HomeLinkComponent', () => {
  let component: HomeLinkComponent;
  let fixture: ComponentFixture<HomeLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeLinkComponent]
    });
    fixture = TestBed.createComponent(HomeLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
