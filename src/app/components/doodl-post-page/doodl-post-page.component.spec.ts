import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoodlPostPageComponent } from './doodl-post-page.component';

describe('DoodlPostPageComponent', () => {
  let component: DoodlPostPageComponent;
  let fixture: ComponentFixture<DoodlPostPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoodlPostPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoodlPostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
