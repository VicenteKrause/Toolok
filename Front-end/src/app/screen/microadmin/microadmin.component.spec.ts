import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroadminComponent } from './microadmin.component';

describe('MicroadminComponent', () => {
  let component: MicroadminComponent;
  let fixture: ComponentFixture<MicroadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
