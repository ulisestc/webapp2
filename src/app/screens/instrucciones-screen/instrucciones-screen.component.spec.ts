import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruccionesScreenComponent } from './instrucciones-screen.component';

describe('InstruccionesScreenComponent', () => {
  let component: InstruccionesScreenComponent;
  let fixture: ComponentFixture<InstruccionesScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstruccionesScreenComponent]
    });
    fixture = TestBed.createComponent(InstruccionesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
