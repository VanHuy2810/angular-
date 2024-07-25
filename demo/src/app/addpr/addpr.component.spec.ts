import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprComponent } from './addpr.component';

describe('AddprComponent', () => {
  let component: AddprComponent;
  let fixture: ComponentFixture<AddprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddprComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
