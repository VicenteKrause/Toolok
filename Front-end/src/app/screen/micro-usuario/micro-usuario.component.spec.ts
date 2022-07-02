import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroUsuarioComponent } from './micro-usuario.component';

describe('MicroUsuarioComponent', () => {
  let component: MicroUsuarioComponent;
  let fixture: ComponentFixture<MicroUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
