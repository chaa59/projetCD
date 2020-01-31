import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancesSelectComponent } from './vacances-select.component';

describe('VacancesSelectComponent', () => {
  let component: VacancesSelectComponent;
  let fixture: ComponentFixture<VacancesSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacancesSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancesSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
