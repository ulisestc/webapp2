import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LentesScreenComponent } from './lentes-screen.component';

describe('LentesScreenComponent', () => {
  let component: LentesScreenComponent;
  let fixture: ComponentFixture<LentesScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LentesScreenComponent]
    });
    fixture = TestBed.createComponent(LentesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
