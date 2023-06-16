import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestesComServiceComponent } from './testes-com-service.component';

describe('TestesComServiceComponent', () => {
  let component: TestesComServiceComponent;
  let fixture: ComponentFixture<TestesComServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestesComServiceComponent]
    });
    fixture = TestBed.createComponent(TestesComServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
