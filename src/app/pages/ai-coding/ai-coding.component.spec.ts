import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiCodingComponent } from './ai-coding.component';

describe('AiCodingComponent', () => {
  let component: AiCodingComponent;
  let fixture: ComponentFixture<AiCodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiCodingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AiCodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
