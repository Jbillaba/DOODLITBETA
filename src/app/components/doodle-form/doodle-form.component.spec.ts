import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoodleFormComponent } from './doodle-form.component';

describe('DoodleFormComponent', () => {
  let component: DoodleFormComponent;
  let fixture: ComponentFixture<DoodleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoodleFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoodleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
