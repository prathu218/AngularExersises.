import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerComponent } from './server-component';

describe('ServerComponentComponent', () => {
  let component: ServerComponent;
  let fixture: ComponentFixture<ServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
