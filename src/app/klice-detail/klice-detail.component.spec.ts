import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KliceDetailComponent } from './klice-detail.component';

describe('KliceDetailComponent', () => {
  let component: KliceDetailComponent;
  let fixture: ComponentFixture<KliceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KliceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KliceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
