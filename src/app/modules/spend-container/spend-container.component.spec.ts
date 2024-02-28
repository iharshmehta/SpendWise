import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendContainerComponent } from './spend-container.component';

describe('SpendContainerComponent', () => {
  let component: SpendContainerComponent;
  let fixture: ComponentFixture<SpendContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpendContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpendContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
