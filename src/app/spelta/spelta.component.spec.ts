import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeltaComponent } from './spelta.component';

describe('SpeltaComponent', () => {
  let component: SpeltaComponent;
  let fixture: ComponentFixture<SpeltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeltaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
