import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminosYCondicionesScreenComponent } from './terminos-y-condiciones-screen.component';

describe('TerminosYCondicionesScreenComponent', () => {
  let component: TerminosYCondicionesScreenComponent;
  let fixture: ComponentFixture<TerminosYCondicionesScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerminosYCondicionesScreenComponent]
    });
    fixture = TestBed.createComponent(TerminosYCondicionesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
