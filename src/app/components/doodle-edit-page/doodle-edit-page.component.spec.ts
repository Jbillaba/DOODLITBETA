import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoodleEditPageComponent } from './doodle-edit-page.component';

describe('DoodleEditPageComponent', () => {
  let component: DoodleEditPageComponent;
  let fixture: ComponentFixture<DoodleEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoodleEditPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoodleEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
