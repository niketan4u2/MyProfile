import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperenceComponent } from './work-experence.component';

describe('WorkExperenceComponent', () => {
  let component: WorkExperenceComponent;
  let fixture: ComponentFixture<WorkExperenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkExperenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkExperenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
