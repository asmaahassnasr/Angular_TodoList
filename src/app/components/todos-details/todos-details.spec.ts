import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosDetails } from './todos-details';

describe('TodosDetails', () => {
  let component: TodosDetails;
  let fixture: ComponentFixture<TodosDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(TodosDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
