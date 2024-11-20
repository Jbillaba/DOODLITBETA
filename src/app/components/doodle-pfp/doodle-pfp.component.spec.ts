import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoodlePfpComponent } from './doodle-pfp.component';

describe('DoodlePfpComponent', () => {
  let component: DoodlePfpComponent;
  let fixture: ComponentFixture<DoodlePfpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoodlePfpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoodlePfpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
