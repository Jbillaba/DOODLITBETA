import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoodlrProfileComponent } from './doodlr-profile.component';

describe('DoodlrProfileComponent', () => {
  let component: DoodlrProfileComponent;
  let fixture: ComponentFixture<DoodlrProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoodlrProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoodlrProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
