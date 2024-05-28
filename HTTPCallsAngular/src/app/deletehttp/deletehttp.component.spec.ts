import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletehttpComponent } from './deletehttp.component';

describe('DeletehttpComponent', () => {
  let component: DeletehttpComponent;
  let fixture: ComponentFixture<DeletehttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletehttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletehttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
