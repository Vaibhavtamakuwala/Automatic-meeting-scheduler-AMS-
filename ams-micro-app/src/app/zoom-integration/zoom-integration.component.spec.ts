import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomIntegrationComponent } from './zoom-integration.component';

describe('ZoomIntegrationComponent', () => {
  let component: ZoomIntegrationComponent;
  let fixture: ComponentFixture<ZoomIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomIntegrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
