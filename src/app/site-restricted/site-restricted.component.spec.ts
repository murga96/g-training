import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteRestrictedComponent } from './site-restricted.component';

describe('SiteRestrictedComponent', () => {
  let component: SiteRestrictedComponent;
  let fixture: ComponentFixture<SiteRestrictedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteRestrictedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteRestrictedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
