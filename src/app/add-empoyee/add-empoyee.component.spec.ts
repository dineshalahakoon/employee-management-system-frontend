import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmpoyeeComponent } from './add-empoyee.component';

describe('AddEmpoyeeComponent', () => {
  let component: AddEmpoyeeComponent;
  let fixture: ComponentFixture<AddEmpoyeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEmpoyeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmpoyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
