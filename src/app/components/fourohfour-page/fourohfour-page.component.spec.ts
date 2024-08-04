import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourohfourPageComponent } from './fourohfour-page.component';

describe('FourohfourPageComponent', () => {
  let component: FourohfourPageComponent;
  let fixture: ComponentFixture<FourohfourPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourohfourPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourohfourPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
