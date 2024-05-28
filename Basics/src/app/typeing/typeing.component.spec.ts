import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeingComponent } from './typeing.component';

describe('TypeingComponent', () => {
  let component: TypeingComponent;
  let fixture: ComponentFixture<TypeingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
