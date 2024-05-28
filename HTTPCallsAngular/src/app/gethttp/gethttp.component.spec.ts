import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GethttpComponent } from './gethttp.component';

describe('GethttpComponent', () => {
  let component: GethttpComponent;
  let fixture: ComponentFixture<GethttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GethttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GethttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
