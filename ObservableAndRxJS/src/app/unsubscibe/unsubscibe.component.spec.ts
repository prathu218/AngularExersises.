import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscibeComponent } from './unsubscibe.component';

describe('UnsubscibeComponent', () => {
  let component: UnsubscibeComponent;
  let fixture: ComponentFixture<UnsubscibeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsubscibeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnsubscibeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
