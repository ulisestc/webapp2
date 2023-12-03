import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoTerminadoScreenComponent } from './juego-terminado-screen.component';

describe('JuegoTerminadoScreenComponent', () => {
  let component: JuegoTerminadoScreenComponent;
  let fixture: ComponentFixture<JuegoTerminadoScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuegoTerminadoScreenComponent]
    });
    fixture = TestBed.createComponent(JuegoTerminadoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
