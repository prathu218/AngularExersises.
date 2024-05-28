import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuthttpComponent } from './puthttp.component';

describe('PuthttpComponent', () => {
  let component: PuthttpComponent;
  let fixture: ComponentFixture<PuthttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuthttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuthttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
