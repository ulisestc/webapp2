import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoScreenComponent } from './juego-screen.component';

describe('JuegoScreenComponent', () => {
  let component: JuegoScreenComponent;
  let fixture: ComponentFixture<JuegoScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuegoScreenComponent]
    });
    fixture = TestBed.createComponent(JuegoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
