import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoodlePageComponent } from './doodle-page.component';

describe('DoodlePageComponent', () => {
  let component: DoodlePageComponent;
  let fixture: ComponentFixture<DoodlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoodlePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoodlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
