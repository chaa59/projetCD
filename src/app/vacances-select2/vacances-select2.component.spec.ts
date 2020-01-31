import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancesSelect2Component } from './vacances-select2.component';

describe('VacancesSelect2Component', () => {
  let component: VacancesSelect2Component;
  let fixture: ComponentFixture<VacancesSelect2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacancesSelect2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancesSelect2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
