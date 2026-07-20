import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosWithJsonServer } from './todos-with-json-server';

describe('TodosWithJsonServer', () => {
  let component: TodosWithJsonServer;
  let fixture: ComponentFixture<TodosWithJsonServer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosWithJsonServer],
    }).compileComponents();

    fixture = TestBed.createComponent(TodosWithJsonServer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
