import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteUsandoFuncionalidadesComponent } from './teste-usando-funcionalidades.component';

describe('TesteUsandoFuncionalidadesComponent', () => {
  let component: TesteUsandoFuncionalidadesComponent;
  let fixture: ComponentFixture<TesteUsandoFuncionalidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TesteUsandoFuncionalidadesComponent]
    });
    fixture = TestBed.createComponent(TesteUsandoFuncionalidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
