import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoodleBookmarksComponent } from './doodle-bookmarks.component';

describe('DoodleBookmarksComponent', () => {
  let component: DoodleBookmarksComponent;
  let fixture: ComponentFixture<DoodleBookmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoodleBookmarksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoodleBookmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
