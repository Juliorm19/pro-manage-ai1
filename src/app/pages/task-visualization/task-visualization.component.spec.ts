import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskVisualizationComponent } from './task-visualization.component';

describe('TaskVisualizationComponent', () => {
  let component: TaskVisualizationComponent;
  let fixture: ComponentFixture<TaskVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskVisualizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
