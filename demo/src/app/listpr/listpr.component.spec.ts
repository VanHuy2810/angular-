import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprComponent } from './listpr.component';

describe('ListprComponent', () => {
  let component: ListprComponent;
  let fixture: ComponentFixture<ListprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListprComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
