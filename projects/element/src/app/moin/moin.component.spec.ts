import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoinComponent } from './moin.component';

describe('MoinComponent', () => {
  let component: MoinComponent;
  let fixture: ComponentFixture<MoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
