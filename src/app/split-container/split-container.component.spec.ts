import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitContainerComponent } from './split-container.component';

describe('SplitContainerComponent', () => {
  let component: SplitContainerComponent;
  let fixture: ComponentFixture<SplitContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplitContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SplitContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
