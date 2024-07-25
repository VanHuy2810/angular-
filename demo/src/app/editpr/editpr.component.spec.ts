import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprComponent } from './editpr.component';

describe('EditprComponent', () => {
  let component: EditprComponent;
  let fixture: ComponentFixture<EditprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditprComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
